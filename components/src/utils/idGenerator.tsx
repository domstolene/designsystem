export const derivativeIdGenerator = (
  prefix: string,
  suffix: string,
  value?: string | number
) => (value ? `${prefix}-${suffix}` : undefined);

export const idArrayGenerator = (
  values: (string | undefined)[]
): string[] | undefined => {
  const array: string[] = [];
  values.forEach(e => {
    if (e) {
      array.push(e);
    }
  });
  return array.length > 0 ? array : undefined;
};

export const spaceSeparatedIdListGenerator = (
  values: (string | undefined)[]
): string | undefined => {
  return idArrayGenerator(values)?.join(' ');
};
