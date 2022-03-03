export const derivativeIdGenerator = (
  prefix: string,
  suffix: string,
  value?: string | number
) => (value ? `${prefix}-${suffix}` : undefined);

export const idArrayGenerator = (values: (string | undefined)[]): string[] => {
  const array: string[] = [];
  values.forEach(e => {
    if (e) {
      array.push(e);
    }
  });
  return array;
};

export const spaceSeparatedIdListGenerator = (
  values: (string | undefined)[]
): string => {
  return idArrayGenerator(values).join(' ');
};
