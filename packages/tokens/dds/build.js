import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { fileHeader } from 'style-dictionary/utils';

import {
  filterOutBase,
  hasPxOrEm,
  hasRem,
  numberTokenOutput,
} from './utils.js';

console.log('Tokens build started...');
console.log('\n==============================================');

register(StyleDictionary);

function getStyleDictionaryConfig(theme) {
  return {
    source: ['tokens/Base.json', `tokens/${theme}.json`],
    preprocessors: ['tokens-studio'],
    platforms: {
      css: {
        buildPath: `build/css/${theme}/`,
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        files: [
          {
            destination: `ddsTokens${theme}.css`,
            format: 'css/variables',
            filter: token => filterOutBase(token),
          },
        ],
      },
      js: {
        buildPath: `build/js/${theme}/`,
        transformGroup: 'tokens-studio',
        files: [
          {
            destination: 'ddsTokens.ts',
            format: 'custom/javascript/es6',
            filter: token => filterOutBase(token),
          },
        ],
      },
      scss: {
        buildPath: `build/scss/${theme}/`,
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        files: [
          {
            destination: `_ddsTokens${theme}.scss`,
            format: 'scss/variables',
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

    if (platform === 'js') {
      /**
       * Hvis en token er en størrelse (1px, 2rem osv),
       * returnerer vi ekstra token med kun tall i JS.
       * Den har "Number" og måleenhet som suffiks i navnet.
       * Slike tokens kan brukes f.eks. til offset i floating-ui.
       */
      sd.registerFormat({
        name: 'custom/javascript/es6',
        format: async ({ dictionary, file }) => {
          const header = await fileHeader({ file, commentStyle: 'short' });
          return (
            header +
            dictionary.allTokens
              .map(token => {
                let output = `export const ${token.name} = ${JSON.stringify(
                  token.value,
                )};`;
                if (hasRem(token)) {
                  output = numberTokenOutput(token, 3);
                } else if (hasPxOrEm(token)) {
                  output = numberTokenOutput(token, 2);
                }
                if (token.comment) {
                  output += ` // ${token.comment}`;
                }
                return output;
              })
              .join('\n')
          );
        },
      });
    }
    sd.buildPlatform(platform);
  });
});

console.log('\n==============================================');
console.log('\nTokens build completed!');
