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

const sourcePathBase = 'dds/tokens';
const generatePathBase = 'generated-tokens';

function getStyleDictionaryConfig(theme) {
  return {
    source: [`${sourcePathBase}/Base.json`, `${sourcePathBase}/${theme}.json`],
    preprocessors: ['tokens-studio'],
    platforms: {
      css: {
        buildPath: `${generatePathBase}/css/${theme}/`,
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        files: [
          {
            destination: `ddsTokens-${theme.toLowerCase()}.css`,
            format: 'custom/css/variables',
            filter: token => filterOutBase(token),
          },
        ],
      },
      js: {
        buildPath: `${generatePathBase}/js/${theme}/`,
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
        buildPath: `${generatePathBase}/scss/`,
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

['Core', 'Public'].map(function (theme) {
  ['css', 'js', 'scss'].map(function (platform) {
    console.log('\n==============================================');
    console.log(`\nProcessing: [${theme}] [${platform}]`);

    const sd = new StyleDictionary(getStyleDictionaryConfig(theme), {
      verbosity: 'verbose',
    });

    sd.buildPlatform(platform);
  });
});

console.log('\n==============================================');
console.log('\nTokens build completed!');
