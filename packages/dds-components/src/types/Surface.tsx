export const BORDER_RADII = [
  'button',
  'input',
  'surface',
  'chip',
  'rounded',
  '0',
] as const;

export const ELEVATIONS = [1, 2, 3, 4] as const;

export const BORDER_COLORS = [
  'border-default',
  'border-subtle',
  'border-inverse',
  'border-action-default',
  'border-action-hover',
  'border-success',
  'border-warning',
  'border-danger',
  'border-info',
  'border-on-action',
] as const;

const BACKGROUNDS = [
  'surface-default',
  'surface-subtle',
  'surface-medium',
  'surface-inverse-default',
  'surface-danger-default',
  'surface-danger-strong',
  'surface-success-default',
  'surface-success-strong',
  'surface-warning-default',
  'surface-warning-strong',
  'surface-info-default',
  'surface-info-strong',
  'surface-paper-default',
  'surface-notification',
  'surface-field-disabled',
  'brand-primary-default',
  'brand-primary-subtle',
  'brand-primary-medium',
  'brand-primary-strong',
  'brand-secondary-default',
  'brand-secondary-subtle',
  'brand-secondary-medium',
  'brand-secondary-strong',
  'brand-tertiary-default',
  'brand-tertiary-subtle',
  'brand-tertiary-medium',
  'brand-tertiary-strong',
] as const;

export type BorderRadius = (typeof BORDER_RADII)[number];
export type Elevation = (typeof ELEVATIONS)[number];
export type BorderColor = (typeof BORDER_COLORS)[number];
export type PaperBackground = (typeof BACKGROUNDS)[number];

export const isPaperBackground = (value: unknown): value is PaperBackground => {
  return (
    typeof value === 'string' && BACKGROUNDS.includes(value as PaperBackground)
  );
};

export const isBorderColor = (value: unknown): value is BorderColor => {
  return (
    typeof value === 'string' && BORDER_COLORS.includes(value as BorderColor)
  );
};

export const isBorderRadius = (value: unknown): value is BorderRadius => {
  return (
    typeof value === 'string' && BORDER_RADII.includes(value as BorderRadius)
  );
};

export const isElevation = (value: unknown): value is Elevation => {
  return typeof value === 'number' && ELEVATIONS.includes(value as Elevation);
};
