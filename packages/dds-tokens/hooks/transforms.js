/**
 * Custom Function Typography Css Shorthand transform
 * Brukes når verdier inneholder CSS funksjoner som clamp().
 * Sørger for at funksjonene bevares.
 */

export function ddsFunctionTgCssShorthand(token) {
  const { fontFamily, fontWeight, fontSize, lineHeight } = token.original.value;

  return `${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`;
}
