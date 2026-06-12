// @vitest-environment node

import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

// Matcher gyldig --dds-* CSS variabelnavn.
// Mønster: --dds- etterfulgt av en eller flere <word>- grupper, avsluttet med et ord.
const TOKEN_PATTERN = String.raw`(--dds-(?:[a-z0-9]+-)*[a-z0-9]+)`;
const VAR_RE = new RegExp(String.raw`var\(` + TOKEN_PATTERN, 'g');
const DEF_RE = new RegExp(TOKEN_PATTERN + String.raw`\s*:`, 'g');
const TSX_KEY_RE = new RegExp(`['"\`]` + TOKEN_PATTERN + `['"\`]`, 'g');

/* Skip CSS-variabler som håndteres av layout primitive systemet (Box, Grid, Bleed, etc.).
 * De settes som inline stiler og brukes via media-query overrides i bl.a. layout.module.css.
 */
const isSkippedToken = (t: string) =>
  t.startsWith('--dds-r-') || t.startsWith('--dds-paper-');

function walkDir(dir: string, ...exts: Array<string>): Array<string> {
  const results: Array<string> = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'tests') continue;
      results.push(...walkDir(full, ...exts));
    } else if (
      entry.isFile() &&
      exts.some(ext => entry.name.endsWith(ext)) &&
      !entry.name.endsWith('.spec.ts') &&
      !entry.name.endsWith('.spec.tsx')
    ) {
      results.push(full);
    }
  }
  return results;
}

/** CSS-variabler referert til via var(--dds-<name>).
 * Hopper over treff umiddelbart etterfulgt av '-$' i f.eks. .ts(x) filer — disse er delvise navn
 * fra template literals med innebygde uttrykk, f.eks.
 *   `var(--dds-color-icon-on-${purpose}-default)`
 * som regexen ikke kan løse fullt ut.
 */
function extractVarUsages(content: string): Array<string> {
  const results: Array<string> = [];
  for (const m of content.matchAll(VAR_RE)) {
    const end = m.index + m[0].length;
    if (content[end] === '-' && content[end + 1] === '$') continue;
    results.push(m[1]);
  }
  return results;
}

/** CSS-variabler: --dds-<name>: */
function extractDefinitions(content: string): Array<string> {
  return [...content.matchAll(DEF_RE)].map(m => m[1]);
}

/**
 * CSS-variabler satt som inline-style keys i TSX/TS, f.eks.
 *   ['--dds-selection-control-card-padding' as any]: value
 */
function extractTsxStyleKeyDefinitions(content: string): Array<string> {
  return [...content.matchAll(TSX_KEY_RE)].map(m => m[1]);
}

const srcDir = path.join(process.cwd(), 'src');
const tokensCssDir = path.join(
  process.cwd(),
  '..',
  'dds-tokens',
  'generated-tokens',
  'css',
);

// ThemeProvider.module.css definerer globale CSS-variabler som API for konsumenter.
// Disse ekskluderes.
const THEME_PROVIDER_CSS = path.join(
  srcDir,
  'components',
  'ThemeProvider',
  'ThemeProvider.module.css',
);

const allUsedTokens = new Map<string, Set<string>>();
const allLocallyDefinedTokens = new Map<string, Set<string>>();
const themeProviderTokens = new Set<string>();

function addToMap(map: Map<string, Set<string>>, token: string, file: string) {
  if (!map.has(token)) map.set(token, new Set());
  map.get(token)!.add(file);
}

// CSS
for (const cssFile of walkDir(srcDir, '.css')) {
  const content = fs.readFileSync(cssFile, 'utf-8');
  const rel = `packages\\dds-components\\src\\${path.relative(srcDir, cssFile)}`;
  for (const t of extractVarUsages(content)) addToMap(allUsedTokens, t, rel);
  for (const t of extractDefinitions(content)) {
    addToMap(allLocallyDefinedTokens, t, rel);
    if (cssFile === THEME_PROVIDER_CSS) themeProviderTokens.add(t);
  }
}

// TSX/TS: hent ut var() bruk og inline style-key definisjoner.
for (const tsxFile of walkDir(srcDir, '.tsx', '.ts')) {
  const content = fs.readFileSync(tsxFile, 'utf-8');
  const rel = `packages\\dds-components\\src\\${path.relative(srcDir, tsxFile)}`;
  for (const t of extractVarUsages(content)) addToMap(allUsedTokens, t, rel);
  for (const t of extractTsxStyleKeyDefinitions(content))
    addToMap(allLocallyDefinedTokens, t, rel);
}

const allTokensFromPackage = new Set<string>();
for (const file of fs
  .readdirSync(tokensCssDir)
  .filter(f => f.endsWith('.css'))) {
  const content = fs.readFileSync(path.join(tokensCssDir, file), 'utf-8');
  for (const t of extractDefinitions(content)) allTokensFromPackage.add(t);
}

const allDefinedTokens = new Set([
  ...allLocallyDefinedTokens.keys(),
  ...allTokensFromPackage,
]);

describe('CSS variable usage with dds prefix', () => {
  it('all CSS variables used in components are defined somewhere (dds-design-tokens, local CSS, or inline TSX styles)', () => {
    const missing = [...allUsedTokens.entries()]
      .filter(([t]) => !isSkippedToken(t))
      .filter(([t]) => !allDefinedTokens.has(t));

    const lines = missing.map(
      ([t, files]) => `  ${t}\n    used in: ${[...files].join(', ')}`,
    );
    expect(
      missing.map(([t]) => t),
      `Components reference CSS variables that are not defined anywhere:\n${lines.join('\n')}`,
    ).toEqual([]);
  });

  it('all CSS variables defined locally are actually used somewhere (CSS or TSX)', () => {
    const internalTokens = [...allLocallyDefinedTokens.entries()].filter(
      ([t]) => !themeProviderTokens.has(t),
    );

    const unused = internalTokens.filter(
      ([t]) =>
        !isSkippedToken(t) &&
        !allUsedTokens.has(t) &&
        !allTokensFromPackage.has(t),
    );

    const lines = unused.map(
      ([t, files]) => `  ${t}\n    defined in: ${[...files].join(', ')}`,
    );
    expect(
      unused.map(([t]) => t),
      `Locally-defined CSS variables that are never used internally:\n${lines.join('\n')}`,
    ).toEqual([]);
  });
});
