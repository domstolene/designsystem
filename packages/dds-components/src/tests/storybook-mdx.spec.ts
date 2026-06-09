import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

function walkDir(dir: string, ext: string): Array<string> {
  const results: Array<string> = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(full, ext));
    } else if (entry.isFile() && entry.name.endsWith(ext)) {
      results.push(full);
    }
  }
  return results;
}

const srcDir = path.join(process.cwd(), 'src');

// For hver .stories.tsx fil ta basenavnet og sjekk om en matchende .mdx eksisterer.
// E.g. "NativeSelect.stories.tsx" → ser etter "NativeSelect.mdx" i samme katalog.
function hasMatchingMdx(storiesFile: string): boolean {
  const dir = path.dirname(storiesFile);
  const base = path.basename(storiesFile).replace(/\.stories\.tsx$/, '');
  return fs.existsSync(path.join(dir, `${base}.mdx`));
}

describe('stories files with a matching MDX file must have export default meta', () => {
  const storiesFiles = walkDir(srcDir, '.stories.tsx').filter(hasMatchingMdx);

  for (const storiesFile of storiesFiles) {
    it(`${path.relative(srcDir, storiesFile)} has export default`, () => {
      const content = fs.readFileSync(storiesFile, 'utf-8');
      expect(
        content,
        `'${path.relative(srcDir, storiesFile)}' is missing 'export default meta'. ` +
          `This causes <Meta of={...} /> to fail in production and branch preview Storybook builds.`,
      ).toMatch(/^export default\b/m);
    });
  }
});
