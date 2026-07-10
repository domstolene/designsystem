export function toCamelCase(string) {
  return string
    .split('-')
    .map((segment, i) =>
      i === 0 ? segment : segment[0].toUpperCase() + segment.slice(1),
    )
    .join('');
}
