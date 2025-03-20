export type BorderColor =
  | 'border-default'
  | 'border-subtle'
  | 'border-inverse'
  | 'border-action-default'
  | 'border-action-hover'
  | 'border-success'
  | 'border-warning'
  | 'border-danger'
  | 'border-info'
  | 'border-on-action';

export type PaperBackground =
  | 'surface-subtle'
  | 'surface-medium'
  | 'surface-inverse-default'
  | 'surface-danger-default'
  | 'surface-danger-strong'
  | 'surface-success-default'
  | 'surface-success-strong'
  | 'surface-warning-default'
  | 'surface-warning-strong'
  | 'surface-info-default'
  | 'surface-info-strong'
  | 'surface-paper-default'
  | 'surface-notification'
  | 'brand-primary-default'
  | 'brand-primary-subtle'
  | 'brand-primary-medium'
  | 'brand-primary-strong'
  | 'brand-secondary-default'
  | 'brand-secondary-subtle'
  | 'brand-secondary-medium'
  | 'brand-secondary-strong'
  | 'brand-tertiary-default'
  | 'brand-tertiary-subtle'
  | 'brand-tertiary-medium'
  | 'brand-tertiary-strong';

export type BorderRadius =
  | 'button'
  | 'input'
  | 'surface'
  | 'chip'
  | 'rounded'
  | '0';

export type Elevation = 1 | 2 | 3 | 4;

export const BORDER_COLORS: Array<BorderColor> = [
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
];

const BACKGROUNDS: Array<PaperBackground> = [
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
];

export const BORDER_RADII: Array<BorderRadius> = [
  'button',
  'input',
  'surface',
  'chip',
  'rounded',
  '0',
];

export const ELEVATIONS: Array<Elevation> = [1, 2, 3, 4];

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
