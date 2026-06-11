// @vitest-environment node
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

const cssPath = fileURLToPath(new URL('./layout.module.css', import.meta.url));
const css = readFileSync(cssPath, 'utf-8');

const BREAKPOINTS = [
  { name: 'xs', mediaQuery: '(max-width: 599px)' },
  { name: 'sm', mediaQuery: '(min-width: 600px)' },
  { name: 'md', mediaQuery: '(min-width: 960px)' },
  { name: 'lg', mediaQuery: '(min-width: 1280px)' },
  { name: 'xl', mediaQuery: '(min-width: 1920px)' },
] as const;

/** Returnerer top-level (non-media-query) rules som { className → ruleBody }. */
function getTopLevelRules(cssText: string): Record<string, string> {
  let stripped = '';
  let depth = 0;
  let inMedia = false;

  for (let i = 0; i < cssText.length; i++) {
    if (!inMedia && cssText.startsWith('@media', i)) {
      inMedia = true;
    }
    if (cssText[i] === '{') {
      depth++;
      if (!inMedia) stripped += cssText[i];
      continue;
    }
    if (cssText[i] === '}') {
      depth--;
      if (inMedia && depth === 0) {
        inMedia = false;
        continue;
      }
      if (!inMedia) stripped += cssText[i];
      continue;
    }
    if (!inMedia) stripped += cssText[i];
  }

  const rules: Record<string, string> = {};
  const re = /\.(dds-[\w-]+)\s*\{([^}]+)\}/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(stripped)) !== null) {
    rules[m[1]] = m[2];
  }
  return rules;
}

/** Returnerer @media-blokker som { mediaCondition → { className → ruleBody } }. */
function getMediaQueryBlocks(
  cssText: string,
): Record<string, Record<string, string>> {
  const blocks: Record<string, Record<string, string>> = {};
  let i = 0;

  while (i < cssText.length) {
    const mediaIdx = cssText.indexOf('@media', i);
    if (mediaIdx === -1) break;

    const openBrace = cssText.indexOf('{', mediaIdx);
    const condition = cssText.slice(mediaIdx + 6, openBrace).trim();

    let depth = 0;
    let end = -1;
    for (let j = openBrace; j < cssText.length; j++) {
      if (cssText[j] === '{') depth++;
      if (cssText[j] === '}') {
        depth--;
        if (depth === 0) {
          end = j;
          break;
        }
      }
    }

    const blockContent = cssText.slice(openBrace + 1, end);
    const rules: Record<string, string> = {};
    const re = /\.(dds-[\w-]+)\s*\{([^}]+)\}/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(blockContent)) !== null) {
      rules[m[1]] = m[2];
    }
    blocks[condition] = rules;
    i = end + 1;
  }
  return blocks;
}

const topLevelRules = getTopLevelRules(css);
const mediaBlocks = getMediaQueryBlocks(css);

const topLevelRuleEntries = Object.entries(topLevelRules).map(
  ([className, body]) => ({
    className,
    body,
    suffix: className.replace(/^dds-/, ''),
  }),
);

describe('layout.module.css', () => {
  describe('base classes (.dds-<suffix>)', () => {
    it.each(topLevelRuleEntries)(
      '.dds-$suffix contains CSS-variabel --dds-r-$suffix: var(--dds-r-xs-$suffix)',
      ({ suffix, body }) => {
        expect(body).toContain(`--dds-r-${suffix}: var(--dds-r-xs-${suffix})`);
      },
    );

    it.each(topLevelRuleEntries)(
      '.dds-$suffix contains CSS-property with value var(--dds-r-$suffix, initial)',
      ({ suffix, body }) => {
        expect(body).toContain(`var(--dds-r-${suffix}, initial)`);
      },
    );
  });

  describe('@media queries', () => {
    it('has @media rules for all breakpoints', () => {
      for (const { mediaQuery } of BREAKPOINTS) {
        expect(
          Object.keys(mediaBlocks),
          `missing @media ${mediaQuery}`,
        ).toContain(mediaQuery);
      }
    });

    it('has exactly 5 @media blocks (one per breakpoint)', () => {
      expect(Object.keys(mediaBlocks)).toHaveLength(BREAKPOINTS.length);
    });

    describe.each(BREAKPOINTS)(
      '@media $mediaQuery (breakpoint: $name)',
      ({ name, mediaQuery }) => {
        it('contains all .dds-<suffix> classes from top level', () => {
          const rules = mediaBlocks[mediaQuery] ?? {};
          for (const className of Object.keys(topLevelRules)) {
            expect(
              Object.keys(rules),
              `missing .${className} in @media ${mediaQuery}`,
            ).toContain(className);
          }
        });

        it.each(topLevelRuleEntries)(
          '.dds-$suffix has --dds-r-$suffix: var(--dds-r-' + name + '-$suffix)',
          ({ className, suffix }) => {
            const rules = mediaBlocks[mediaQuery] ?? {};
            const body = rules[className] ?? '';
            expect(body).toContain(
              `--dds-r-${suffix}: var(--dds-r-${name}-${suffix})`,
            );
          },
        );
      },
    );
  });
});
