export const derivativeIdGenerator = (prefix: string, suffix: string): string =>
  `${prefix}-${suffix}`;

export const spaceSeparatedIdListGenerator = (
  values: (string | undefined)[],
): string | undefined => {
  const filtered = values.filter(Boolean);

  return filtered.length > 0 ? filtered.join(' ') : undefined;
};
