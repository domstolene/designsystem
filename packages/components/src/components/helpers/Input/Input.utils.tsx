export function getDefaultText(
  value?: string | number | readonly string[],
  defaultValue?: string | number | readonly string[],
): string {
  if (typeof value === 'string') {
    return value;
  }

  if (typeof defaultValue === 'string') {
    return defaultValue;
  }

  return '';
}
