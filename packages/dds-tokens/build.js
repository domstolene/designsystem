import fs from 'fs';
import path from 'path';

import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { toCamelCase } from './build.utils.js';

import {
  customCSSFormat,
  customJSFormat,
  customSCSSFormat,
} from './hooks/formats.js';
import {
  logVerbosityLevels,
  transformTypes,
  transforms,
} from 'style-dictionary/enums';
import { ddsFunctionTgCssShorthand } from './hooks/transforms.js';
import {
  filterOutBaseFilter,
  functionTgShorthandFilter,
} from './hooks/filters.js';

register(StyleDictionary);

StyleDictionary.registerFilter({
  name: 'base-out-filter',
  filter: filterOutBaseFilter,
});

StyleDictionary.registerTransform({
  name: 'dds/typography/css/shorthand',
  type: transformTypes.value,
  filter: functionTgShorthandFilter,
  transitive: true,
  transform: ddsFunctionTgCssShorthand,
});

StyleDictionary.registerFormat({
  name: 'dds/css/variables',
  format: customCSSFormat,
});

StyleDictionary.registerFormat({
  name: 'dds/javascript/es6',
  format: customJSFormat,
});

StyleDictionary.registerFormat({
  name: 'dds/scss/variables',
  format: customSCSSFormat,
});

const srcPathBase = 'dds/tokens';
const destPathBase = 'generated-tokens';

const commonSources = [
  'Base/Exclude/BorderRadius.json',
  'Base/Exclude/Color.json',
  'Base/Exclude/Motion.json',
  'Base/Exclude/Shadow.json',
  'Base/ColorData.json',
  'Base/Typography.json',
  'Base/Spacing.json',
  'Base/Zindex.json',
];

const themes = [
  {
    name: 'core-light',
    sources: [
      ...commonSources,
      'Semantic/BorderRadius/Core.json',
      'Semantic/Color/Data/Light.json',
      'Semantic/Color/Elsa/Light.json',
      'Semantic/Motion/Elsa.json',
      'Semantic/Shadow/Light.json',
      'Semantic/Size/Height/Core.json',
      'Semantic/Typography/Core.json',
    ],
  },
  {
    name: 'core-dark',
    sources: [
      ...commonSources,
      'Semantic/BorderRadius/Core.json',
      'Semantic/Color/Data/Dark.json',
      'Semantic/Color/Elsa/Dark.json',
      'Semantic/Motion/Elsa.json',
      'Semantic/Shadow/Dark.json',
      'Semantic/Size/Height/Core.json',
      'Semantic/Typography/Core.json',
    ],
  },
  {
    name: 'public-light',
    sources: [
      ...commonSources,
      'Semantic/BorderRadius/Public.json',
      'Semantic/Color/Data/Light.json',
      'Semantic/Color/Elsa/Light.json',
      'Semantic/Motion/Elsa.json',
      'Semantic/Shadow/Light.json',
      'Semantic/Size/Height/Public.json',
      'Semantic/Typography/Public.json',
    ],
  },
  {
    name: 'public-dark',
    sources: [
      ...commonSources,
      'Semantic/BorderRadius/Public.json',
      'Semantic/Color/Data/Dark.json',
      'Semantic/Color/Elsa/Dark.json',
      'Semantic/Motion/Elsa.json',
      'Semantic/Shadow/Dark.json',
      'Semantic/Size/Height/Public.json',
      'Semantic/Typography/Public.json',
    ],
  },
  {
    name: 'supreme-light',
    sources: [
      ...commonSources,
      'Semantic/BorderRadius/Public.json',
      'Semantic/Color/Data/Light.json',
      'Semantic/Color/Supreme/Light.json',
      'Semantic/Motion/Elsa.json',
      'Semantic/Shadow/Light.json',
      'Semantic/Size/Height/Public.json',
      'Semantic/Typography/Supreme.json',
    ],
  },
  {
    name: 'supreme-dark',
    sources: [
      ...commonSources,
      'Semantic/BorderRadius/Public.json',
      'Semantic/Color/Data/Dark.json',
      'Semantic/Color/Supreme/Dark.json',
      'Semantic/Motion/Elsa.json',
      'Semantic/Shadow/Dark.json',
      'Semantic/Size/Height/Public.json',
      'Semantic/Typography/Supreme.json',
    ],
  },
];

const platforms = ['css', 'js', 'scss'];

function getStyleDictionaryConfig(theme) {
  return {
    source: theme.sources.map(src => `${srcPathBase}/${src}`),
    preprocessors: ['tokens-studio'],
    platforms: {
      css: {
        buildPath: `${destPathBase}/css/`,
        transformGroup: 'tokens-studio',
        transforms: [transforms.nameKebab, 'dds/typography/css/shorthand'],
        files: [
          {
            destination: `ddsTokens-${theme.name}.css`,
            format: 'dds/css/variables',
            filter: 'base-out-filter',
          },
        ],
      },
      js: {
        buildPath: `${destPathBase}/js/${theme.name}/`,
        transformGroup: 'tokens-studio',
        transforms: ['dds/typography/css/shorthand'],
        files: [
          {
            destination: 'ddsTokens.ts',
            format: 'dds/javascript/es6',
            filter: 'base-out-filter',
          },
        ],
      },
      // Returnerer bare 1 fil da SCSS-variabler refererer til CSS-variabler
      scss: {
        buildPath: `${destPathBase}/scss/`,
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        files: [
          {
            destination: `_ddsTokens.scss`,
            format: 'dds/scss/variables',
            filter: 'base-out-filter',
          },
        ],
      },
    },
  };
}

async function build() {
  console.log('Tokens build started...');
  console.log('\n==============================================');

  for (const theme of themes) {
    for (const platform of platforms) {
      console.log(`\nProcessing: [${theme.name}] [${platform}]`);
      console.log('\n==============================================');

      const sd = new StyleDictionary(getStyleDictionaryConfig(theme), {
        verbosity: logVerbosityLevels.verbose,
      });
      await sd.buildPlatform(platform);
    }
  }
  console.log('\nTokens build completed!');
}

function generateIndexTs() {
  const jsDir = path.join(destPathBase, 'js');
  const themes = fs
    .readdirSync(jsDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort();

  if (themes.length === 0) {
    console.error(`No themes found in ${jsDir}. Skipping index.ts generation.`);
    return;
  }

  const imports = themes
    .map(
      theme =>
        `import * as ${toCamelCase(theme)} from '../${destPathBase}/js/${theme}/ddsTokens';`,
    )
    .join('\n');

  const entries = themes
    .map(theme => `  '${theme}': { ...${toCamelCase(theme)} },`)
    .join('\n');

  const content = [
    '// Do not edit directly, this file was auto-generated.',
    '',
    imports,
    '',
    'export const ddsTokens = {',
    entries,
    '};',
    '',
  ].join('\n');

  const outPath = path.join('src', 'index.ts');
  console.log(`\nGenerating ${outPath} with theme exports in ts...`);
  fs.writeFileSync(outPath, content, 'utf-8');
  console.log(`\nGenerated ${outPath}`);
}

build()
  .then(() => generateIndexTs())
  .catch(err => {
    console.error('Tokens build failed.', err);
    process.exit(1);
  });
