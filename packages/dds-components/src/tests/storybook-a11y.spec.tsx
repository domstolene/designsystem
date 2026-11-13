/// <reference types="vite/client" />

import { setProjectAnnotations } from '@storybook/react-vite';
import { act, cleanup } from '@testing-library/react';
import { configureAxe } from 'jest-axe';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';

import preview from '../../../../.storybook/preview';

const annotations = setProjectAnnotations(
  preview as Parameters<typeof setProjectAnnotations>[0],
);

beforeAll(async () => {
  await annotations.beforeAll?.();
});

afterEach(() => {
  cleanup();
});

interface StoryModule {
  default?: {
    input?: {
      title?: string;
      tags?: Array<string>;
      parameters?: {
        a11y?: {
          disable?: boolean;
          options?: {
            rules?: Record<string, { enabled: boolean }>;
          };
        };
      };
    };
    title?: string;
    tags?: Array<string>;
    parameters?: {
      a11y?: {
        disable?: boolean;
        options?: {
          rules?: Record<string, { enabled: boolean }>;
        };
      };
    };
  };
  [key: string]: unknown;
}

interface StoryInstance {
  storyName?: string;
  name?: string;
  tags?: Array<string>;
  parameters?: {
    a11y?: {
      disable?: boolean;
      test?: 'error' | 'todo' | 'off';
      options?: {
        rules?: Record<string, { enabled: boolean }>;
      };
    };
  };
  run: () => Promise<void>;
}

function isStoryInstance(value: unknown): value is StoryInstance {
  if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
    return false;
  }

  return typeof (value as { run?: unknown }).run === 'function';
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
    const moduleMeta = storyModule.default?.input;

    if (moduleMeta?.parameters?.a11y?.disable) return [];
    const title = moduleMeta?.title ?? filePath;
    const moduleTags = moduleMeta?.tags ?? [];
    const moduleRules = moduleMeta?.parameters?.a11y?.options?.rules ?? {};
    const stories: Array<{
      title: string;
      moduleTags: Array<string>;
      moduleRules: Record<string, { enabled: boolean }>;
      storyExportName: string;
      story: StoryInstance;
    }> = [];

    for (const [storyExportName, storyExport] of Object.entries(storyModule)) {
      if (storyExportName === 'default' || !isStoryInstance(storyExport)) {
        continue;
      }

      stories.push({
        title,
        moduleTags,
        moduleRules,
        storyExportName,
        story: storyExport,
      });
    }

    return stories;
  })
  .filter(({ story }) => !story.parameters?.a11y?.disable)
  .filter(({ story }) => story.parameters?.a11y?.test !== 'off');

const storiesToTest = allStories
  .filter(
    ({ moduleTags, story }) =>
      moduleTags.includes('a11y') ||
      story.tags?.includes('a11y') ||
      story.parameters?.a11y?.test === 'error',
  )
  .filter(({ story }) => story.parameters?.a11y?.test !== 'todo');

describe('Storybook a11y', () => {
  const effectiveStoriesToTest =
    storiesToTest.length > 0 ? storiesToTest : allStories;

  for (const {
    title,
    storyExportName,
    story,
    moduleRules,
  } of effectiveStoriesToTest) {
    const storyName = story.storyName ?? story.name ?? storyExportName;
    const storyRules = story.parameters?.a11y?.options?.rules ?? {};

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
