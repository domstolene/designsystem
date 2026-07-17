/**
 * Filtrerer ut base tokens som er referansen til de semantiske
 * Beholder basetokens som brukes direkte, som spacing, z-index osv
 */
export function filterOutBaseFilter(token) {
  return !token.filePath.includes('Base/Exclude');
}

/**
 * Filtrerer typografi som inneholder CSS funksjoner
 */
export function functionTgShorthandFilter(token) {
  const fontSize = token.original?.value?.fontSize || '';
  return (
    token.type === 'typography' &&
    ['clamp(', 'mix(', 'max('].some(fn => fontSize.includes(fn))
  );
}
