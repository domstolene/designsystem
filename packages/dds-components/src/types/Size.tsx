import { SIZE_SCALE } from '../components/layout/common/Responsive.types';

export const SIZES = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'inherit',
  'component',
  ...SIZE_SCALE,
] as const;

export type Size = (typeof SIZES)[number];

export function createSizes<T extends Array<Size>>(...sizes: T): T {
  return sizes;
}
