import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { fileHeader } from 'style-dictionary/utils';

console.log('Tokens build started...');
console.log('\n==============================================');

register(StyleDictionary);

const sd = new StyleDictionary('config.json');

const last3 = token => {
  if (token.value !== undefined) return token.value.toString().slice(-3);
};

const last2 = token => {
  if (token.value !== undefined) return token.value.toString().slice(-2);
};

const hasRem = token => {
  return last3(token) === 'rem';
};

const hasPxOrEm = token => {
  return last2(token) === 'px' || last2(token) === 'em';
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
            output = `export const ${token.name} = "${token.value}";\nexport const ${token.name}Number${capitalizeFirstLetter(last3(token))} = ${token.value.slice(0, -3)};`;
          } else if (hasPxOrEm(token)) {
            output = `export const ${token.name} = "${token.value}";\nexport const ${token.name}Number${capitalizeFirstLetter(last2(token))} = ${token.value.slice(0, -2)};`;
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

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
console.log('\n==============================================');
console.log('\nTokens build completed!');
