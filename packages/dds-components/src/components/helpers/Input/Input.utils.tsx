export function getDefaultText(
  value?: string | number | ReadonlyArray<string>,
  defaultValue?: string | number | ReadonlyArray<string>,
): string {
  if (typeof value === 'string') {
    return value;
  }

  if (typeof defaultValue === 'string') {
    return defaultValue;
  }

  return '';
}
