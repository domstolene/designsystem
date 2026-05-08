#!/usr/bin/env ts-node

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ provide a component name.');
  console.error('Usage: pnpm generate:component-template ComponentName');
}

const baseDir = path.join(__dirname, '../src/components', componentName);

const files = [
  `${componentName}.spec.tsx`,
  `${componentName}.stories.tsx`,
  `${componentName}.mdx`,
  `${componentName}.module.css`,
  `${componentName}.tsx`,
  `index.ts`,
];

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function createFile(filePath: string, content: string) {
  if (fs.existsSync(filePath)) {
    console.warn(
      `⚠️  File already exists: ${filePath}, skipping file creation.`,
    );
    return;
  }
  fs.writeFileSync(filePath, content);
}

ensureDir(baseDir);

files.forEach(file => {
  const fullPath = path.join(baseDir, file);
  createFile(fullPath, getTemplate(file, componentName));
});

console.log(`✅ Component "${componentName}" created successfully.`);
updateMainIndex(componentName);

function getTemplate(fileName: string, name: string): string {
  if (fileName.endsWith('.spec.tsx')) {
    console.log(`⏳ Generating ${name}.spec.tsx...`);
    return `
  import { render } from "@testing-library/react";
  import { describe, it } from 'vitest';
  
  import { ${name} } from ".";
  
  describe('<${name}>', () => {
    it("renders without crashing", () => {
      render(<${name} />);
    });
  });
      `.trim();
  }

  if (fileName.endsWith('.stories.tsx')) {
    console.log(`⏳ Generating ${name}.stories.tsx...`);
    return `
import preview from '#.storybook/preview';

import { ${name} } from "./${name}";
import { commonArgTypes } from '../../storybook';

const meta = preview.meta({
  title: "dds-components/Components/${name}",
  component: ${name},
  argTypes: {
    ...commonArgTypes,
  }
});
  
export default meta;

export const Preview = meta.story();
  `.trim();
  }

  if (fileName.endsWith('.mdx')) {
    console.log(`⏳ Generating ${name}.mdx...`);
    return `
  import { Canvas, Controls, Meta } from '@storybook/addon-docs/blocks';
import {
  Source,
  ComponentLinkRow,
  } from '@norges-domstoler/storybook-components';
  
import * as ${name}Stories from './${name}.stories';
import meta from './${name}.stories';

<Meta of={meta} />

# ${name}

<ComponentLinkRow
docsHref="docsId her..."
figmaHref="figmaId her..."
githubHref={{ folder: 'components', comp: '${name}' }}
storybookHref={{ folder: 'components', comp: '${name.toLowerCase()}' }}
/>

## Props

<Canvas of={${name}Stories.Preview} sourceState="shown" />
<Controls of={${name}Stories.Preview} />

## Retningslinjer

Retningslinjer her...


`.trim();
  }
  if (fileName.endsWith('.module.css')) {
    console.log(`⏳ Generating ${name}.module.css...`);
    return `
  .container {
    /*styling*/
  }
    `.trim();
  }
  if (fileName.endsWith('index.ts')) {
    console.log(`⏳ Generating index.ts...`);
    return `
export { ${name}, type ${name}Props } from './${name}';
`.trim();
  }

  if (fileName.endsWith('.tsx')) {
    console.log(`⏳ Generating ${name}.tsx...`);
    return `
import styles from './${name}.module.css';
import {
type BaseComponentPropsWithChildren,
getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';

export type ${name}Props = BaseComponentPropsWithChildren<HTMLElement>;

export const ${name} = ({
  id,
  className,
  style,
  htmlProps,
  ...rest
}:${name}Props) => {

return (
  <div
      {...getBaseHTMLProps(id, cn(className, styles.container), style, htmlProps, rest)}
  >
      ${name}
  </div>);
};

${name}.displayName = '${name}';
`.trim();
  }

  return '';
}

function updateMainIndex(componentName: string) {
  const indexPath = path.join(__dirname, '../src/index.ts');

  if (!fs.existsSync(indexPath)) {
    console.warn('⚠️  src/index.ts not found, skipping export update.');
    return;
  }

  const exportLine = `export * from './components/${componentName}';`;
  const content = fs.readFileSync(indexPath, 'utf8');

  if (content.includes(exportLine)) {
    console.log(`ℹ️  ${componentName} already exported in src/index.ts`);
    return;
  }

  const trimmed = content.trimEnd();
  const updatedContent = trimmed + '\n' + exportLine + '\n';

  fs.writeFileSync(indexPath, updatedContent);

  console.log(`✅ Component export added to src/index.ts`);
}
