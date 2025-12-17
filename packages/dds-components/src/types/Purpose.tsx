export const PURPOSES = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'info',
  'danger',
  'warning',
  'default',
  'tips',
] as const;

export type Purpose = (typeof PURPOSES)[number];

export function createPurposes<T extends Array<Purpose>>(...sizes: T): T {
  return sizes;
}
