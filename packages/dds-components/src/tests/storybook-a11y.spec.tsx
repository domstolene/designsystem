/// <reference types="vite/client" />

import { composeStories, setProjectAnnotations } from '@storybook/react-vite';
import { act, cleanup } from '@testing-library/react';
import { configureAxe } from 'jest-axe';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';

import preview from '../../../../.storybook/preview';

const annotations = setProjectAnnotations(preview.composed);

beforeAll(async () => {
  await annotations.beforeAll?.();
});

afterEach(() => {
  cleanup();
});

interface A11yParameters {
  a11y?: {
    disable?: boolean;
    test?: 'error' | 'todo' | 'off';
    options?: {
      rules?: Record<string, { enabled: boolean }>;
    };
  };
}

interface ModuleMeta {
  title?: string;
  tags?: Array<string>;
  parameters?: A11yParameters;
}

interface StoryModule {
  default?: ModuleMeta & {
    input?: ModuleMeta;
  };
  [key: string]: unknown;
}

interface StoryInstance {
  storyName?: string;
  name?: string;
  tags?: Array<string>;
  parameters?: A11yParameters;
  input?: {
    storyName?: string;
    name?: string;
  };
  composed?: {
    name?: string;
    tags?: Array<string>;
    parameters?: A11yParameters;
  };
  meta?: {
    input?: ModuleMeta;
  };
  run: () => Promise<void>;
}

interface NormalizedStory {
  title: string;
  moduleTags: Array<string>;
  moduleRules: Record<string, { enabled: boolean }>;
  storyName: string;
  tags: Array<string>;
  parameters?: A11yParameters;
  story: StoryInstance;
}

function isStoryInstance(value: unknown): value is StoryInstance {
  if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
    return false;
  }

  return typeof (value as { run?: unknown }).run === 'function';
}

function collectCsfNextStories(
  filePath: string,
  storyModule: StoryModule,
): Array<NormalizedStory> {
  const defaultMeta = storyModule.default?.input;
  if (defaultMeta?.parameters?.a11y?.disable) return [];

  const stories: Array<NormalizedStory> = [];

  for (const [storyExportName, storyExport] of Object.entries(storyModule)) {
    if (storyExportName === 'default' || !isStoryInstance(storyExport)) {
      continue;
    }

    const moduleMeta = defaultMeta ?? storyExport.meta?.input;
    if (moduleMeta?.parameters?.a11y?.disable) continue;

    stories.push({
      title: moduleMeta?.title ?? filePath,
      moduleTags: moduleMeta?.tags ?? [],
      moduleRules: moduleMeta?.parameters?.a11y?.options?.rules ?? {},
      storyName:
        storyExport.input?.storyName ??
        storyExport.input?.name ??
        storyExport.storyName ??
        storyExport.name ??
        storyExportName,
      tags: storyExport.composed?.tags ?? storyExport.tags ?? [],
      parameters: storyExport.composed?.parameters ?? storyExport.parameters,
      story: storyExport,
    });
  }

  return stories;
}

function collectCsf3Stories(
  filePath: string,
  storyModule: StoryModule,
): Array<NormalizedStory> {
  const moduleMeta = storyModule.default;
  if (!moduleMeta || moduleMeta.parameters?.a11y?.disable) return [];

  const composedModule = composeStories(
    storyModule as Parameters<typeof composeStories>[0],
  ) as Record<string, unknown>;

  const title = moduleMeta.title ?? filePath;
  const moduleTags = moduleMeta.tags ?? [];
  const moduleRules = moduleMeta.parameters?.a11y?.options?.rules ?? {};
  const stories: Array<NormalizedStory> = [];

  for (const [storyExportName, storyExport] of Object.entries(composedModule)) {
    if (!isStoryInstance(storyExport)) {
      continue;
    }

    const rawExport = storyModule[storyExportName] as
      { storyName?: string; name?: string } | undefined;

    stories.push({
      title,
      moduleTags,
      moduleRules,
      storyName:
        rawExport?.storyName ??
        rawExport?.name ??
        storyExport.storyName ??
        storyExport.name ??
        storyExportName,
      tags: storyExport.tags ?? [],
      parameters: storyExport.parameters,
      story: storyExport,
    });
  }

  return stories;
}

function formatViolations(
  violations: Array<{
    id: string;
    help: string;
    nodes: Array<{ target: Array<string>; failureSummary?: string }>;
  }>,
): string {
  return violations
    .map(violation => {
      const nodes = violation.nodes
        .map(node => {
          const targets = node.target.join(', ');
          const summary = node.failureSummary?.trim() ?? 'No failure summary.';
          return `- target: ${targets}\n  ${summary.replace(/\n/g, '\n  ')}`;
        })
        .join('\n');

      return `${violation.id}: ${violation.help}\n${nodes}`;
    })
    .join('\n\n');
}

const storyModules: Record<string, StoryModule> = {
  ...import.meta.glob('../components/**/*.stories.{ts,tsx,js,jsx}', {
    eager: true,
  }),
} as Record<string, StoryModule>;

const allStories = Object.entries(storyModules)
  .flatMap(([filePath, storyModule]) => {
    const isCsf3Module = Boolean(
      storyModule.default && !storyModule.default.input,
    );

    return isCsf3Module
      ? collectCsf3Stories(filePath, storyModule)
      : collectCsfNextStories(filePath, storyModule);
  })
  .filter(({ parameters }) => !parameters?.a11y?.disable)
  .filter(({ parameters }) => parameters?.a11y?.test !== 'off');

const storiesToTest = allStories
  .filter(
    ({ moduleTags, tags, parameters }) =>
      moduleTags.includes('a11y') ||
      tags.includes('a11y') ||
      parameters?.a11y?.test === 'error',
  )
  .filter(({ parameters }) => parameters?.a11y?.test !== 'todo');

describe('Storybook a11y', () => {
  const effectiveStoriesToTest =
    storiesToTest.length > 0 ? storiesToTest : allStories;

  for (const {
    title,
    storyName,
    parameters,
    story,
    moduleRules,
  } of effectiveStoriesToTest) {
    const storyRules = parameters?.a11y?.options?.rules ?? {};

    it(`${title}: ${storyName}`, async () => {
      (globalThis as Record<string, unknown>).IS_REACT_ACT_ENVIRONMENT = true;
      await act(async () => {
        await story.run();
      });

      // Nullstill React act environment flag etter kjøring av story.
      // Fjerner noise som ikke er relevant for UU-tester med Axe.
      (globalThis as Record<string, unknown>).IS_REACT_ACT_ENVIRONMENT = false;

      const axe = configureAxe({
        rules: {
          // Deaktiverer rules som er relevante kun ved UU-tesing i en applikasjon
          region: { enabled: false },
          'landmark-unique': { enabled: false },
          ...moduleRules,
          ...storyRules,
        },
      });

      const results = await axe(document.body);

      if (results.violations.length > 0) {
        throw new Error(
          `Accessibility violations in ${title}: ${storyName}\n\n${formatViolations(results.violations)}`,
        );
      }

      expect(results.violations).toHaveLength(0);
    });
  }
});
