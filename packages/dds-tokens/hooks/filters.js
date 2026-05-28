/**
 * Filtrerer ut base tokens som er referansen til de semantiske
 */
export function filterOutBaseFilter(token) {
  return !token.attributes.category.includes('base');
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
