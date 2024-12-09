import { fileHeader } from 'style-dictionary/utils';

export const lastChars = (token, length) => {
  if (token.value !== undefined) return token.value.toString().slice(-length);
};

export const hasRem = token => {
  return lastChars(token, 3) === 'rem';
};

export const hasPxOrEm = token => {
  return lastChars(token, 2) === 'px' || lastChars(token, 2) === 'em';
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Filterer ut base tokens som er referansen til de semantiske
 */
export const filterOutBase = token =>
  !token.attributes.category.includes('base');

/**
 * Custom format for JS
 * Hvis en token er en størrelse (1px, 2rem osv),
 * returnerer vi ekstra token med kun tall i JS.
 * Den har "Number" og måleenhet som suffiks i navnet.
 * Slike tokens kan brukes f.eks. til offset i floating-ui.
 */

export const numberTokenOutput = (token, unitLength) =>
  `export const ${token.name} = "${token.value}";\nexport const ${token.name}Number${capitalizeFirstLetter(lastChars(token, unitLength))} = ${token.value.slice(0, -unitLength)};`;

export const customJSFormat = async ({ dictionary, file }) => {
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
};

/**
 * Custom format for CSS
 * For å kunne bygge en ThemeProvider som setter tema, trenger vi
 * en løsning for å sette riktig sett med tokens. Siden mange applikasjoner
 * bruker SSR, må vi benytte oss av en wrapper inni ThemeProvider
 * (istedenfor å sette CSS klasse el.l. på body).
 * Den setter en CSS klasse per tema som setter alle tokens til riktig verdi.
 * For å oppnå dette må tokens-filene returnere en klasse med passende navn,
 * og ikke :root.
 */

const trimClassName = name => name.replace('Tokens', '').replace('.css', '');

export const customCSSFormat = async ({ dictionary, file }) => {
  const header = await fileHeader({ file, commentStyle: 'long' });
  return (
    header +
    `.${trimClassName(file.destination)} {\n` +
    dictionary.allTokens
      .map(token => {
        let output = `  --${token.name}: ${token.value};`;
        if (token.comment) {
          output += ` /* ${token.comment} */`;
        }
        return output;
      })
      .join('\n') +
    '\n}'
  );
};

/**
 * Custom format for SCSS
 * Variablene skal referere til CSS-variabler, og ikke direkte til token-verdiene.
 * Det tillater å bruke theming ut av boksen med ThemeProvider i dds-components, da riktig
 * sett med tokens settes med CSS-variabler.
 * Det blir også mulig å verifisere at riktig token brukes
 * når koden blir inpsisert i nettleseren.
 */

export const customSCSSFormat = async ({ dictionary, file }) => {
  const header = await fileHeader({ file, commentStyle: 'short' });
  return (
    header +
    dictionary.allTokens
      .map(token => {
        let output = `  $${token.name}: var(--${token.name});`;
        if (token.comment) {
          output += ` /* ${token.comment} */`;
        }
        return output;
      })
      .join('\n')
  );
};
