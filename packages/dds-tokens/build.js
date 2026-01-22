import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

import {
  customCSSFormat,
  customJSFormat,
  customSCSSFormat,
  filterOutBase,
} from './utils.js';

console.log('Tokens build started...');
console.log('\n==============================================');

register(StyleDictionary);

StyleDictionary.registerFormat({
  name: 'custom/css/variables',
  format: customCSSFormat,
});

StyleDictionary.registerFormat({
  name: 'custom/javascript/es6',
  format: customJSFormat,
});

StyleDictionary.registerFormat({
  name: 'custom/scss/variables',
  format: customSCSSFormat,
});

const srcPathBase = 'dds/tokens';
const destPathBase = 'generated-tokens';

const themes = [
  {
    name: 'core-light',
    sources: [
      'Base/Elsa.json',
      'Semantic/Color/Light.json',
      'Semantic/Shadow/Light.json',
      'Semantic/BorderRadius/Core.json',
      'Semantic/Typography/Core.json',
    ],
  },
  {
    name: 'core-dark',
    sources: [
      'Base/Elsa.json',
      'Semantic/Color/Dark.json',
      'Semantic/Shadow/Dark.json',
      'Semantic/BorderRadius/Core.json',
      'Semantic/Typography/Core.json',
    ],
  },
  {
    name: 'public-light',
    sources: [
      'Base/Elsa.json',
      'Semantic/Color/Light.json',
      'Semantic/Shadow/Light.json',
      'Semantic/BorderRadius/Public.json',
      'Semantic/Typography/Public.json',
    ],
  },
  {
    name: 'public-dark',
    sources: [
      'Base/Elsa.json',
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
        transforms: ['name/kebab'],
        files: [
          {
            destination: `ddsTokens-${theme.name}.css`,
            format: 'custom/css/variables',
            filter: token => filterOutBase(token),
          },
        ],
      },
      js: {
        buildPath: `${destPathBase}/js/${theme.name}/`,
        transformGroup: 'tokens-studio',
        files: [
          {
            destination: 'ddsTokens.ts',
            format: 'custom/javascript/es6',
            filter: token => filterOutBase(token),
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
            format: 'custom/scss/variables',
            filter: token => filterOutBase(token),
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
      verbosity: 'verbose',
    });

    sd.buildPlatform(platform);
  });
});

console.log('\n==============================================');
console.log('\nTokens build completed!');
