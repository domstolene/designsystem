export const SIZES = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'inherit',
  'component',
] as const;

export type Size = (typeof SIZES)[number];

export function createSizes<T extends Array<Size>>(...sizes: T): T {
  return sizes;
}
