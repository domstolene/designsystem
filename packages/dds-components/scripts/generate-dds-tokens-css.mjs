import { readdir, writeFile } from 'node:fs/promises';

const cssDir = 'node_modules/@norges-domstoler/dds-design-tokens/dist/css';

const files = (await readdir(cssDir))
  .filter(file => file.endsWith('.css'))
  .sort();

const content = files
  .map(
    file => `@import '@norges-domstoler/dds-design-tokens/dist/css/${file}';`,
  )
  .join('\n');

await writeFile(
  'src/styles/dds-tokens.css',
  '/**\n * Do not edit directly, this file was auto-generated.\n */\n\n' +
    content +
    '\n',
);

console.log(`Generated dds-tokens.css with ${files.length} imports`);
