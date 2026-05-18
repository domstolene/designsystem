export function ddsTypographyCssShorthand(token) {
  const { fontFamily, fontWeight, fontSize, lineHeight } = token.original.value;
  return `${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`;
}
