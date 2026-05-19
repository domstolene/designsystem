import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

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

console.log('Tokens build started...');
console.log('\n==============================================');

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

const commonSources = ['Base/Elsa.json', 'Semantic/Motion/Elsa.json'];

const themes = [
  {
    name: 'core-light',
    sources: [
      ...commonSources,
      'Semantic/Color/Light.json',
      'Semantic/Shadow/Light.json',
      'Semantic/BorderRadius/Core.json',
      'Semantic/Typography/Core.json',
    ],
  },
  {
    name: 'core-dark',
    sources: [
      ...commonSources,
      'Semantic/Color/Dark.json',
      'Semantic/Shadow/Dark.json',
      'Semantic/BorderRadius/Core.json',
      'Semantic/Typography/Core.json',
    ],
  },
  {
    name: 'public-light',
    sources: [
      ...commonSources,
      'Semantic/Color/Light.json',
      'Semantic/Shadow/Light.json',
      'Semantic/BorderRadius/Public.json',
      'Semantic/Typography/Public.json',
    ],
  },
  {
    name: 'public-dark',
    sources: [
      ...commonSources,
      'Semantic/Color/Dark.json',
      'Semantic/Shadow/Dark.json',
      'Semantic/BorderRadius/Public.json',
      'Semantic/Typography/Public.json',
    ],
  },
];

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

themes.forEach(theme => {
  ['css', 'js', 'scss'].forEach(platform => {
    console.log('\n==============================================');
    console.log(`\nProcessing: [${theme.name}] [${platform}]`);

    const sd = new StyleDictionary(getStyleDictionaryConfig(theme), {
      verbosity: logVerbosityLevels.verbose,
    });

    sd.buildPlatform(platform);
  });
});

console.log('\n==============================================');
console.log('\nTokens build completed!');
