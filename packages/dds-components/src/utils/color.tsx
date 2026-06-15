import { type Property } from 'csstype';

export const hexToRGBValues = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return [r, g, b].join(', ');
};

const TEXT_COLORS = [
  'text-on-action',
  'text-on-inverse',
  'text-on-status-default',
  'text-on-status-strong',
  'text-action-resting',
  'text-action-hover',
  'text-action-visited',
  'text-default',
  'text-requiredfield',
  'text-subtle',
  'text-medium',
  'text-on-notification',
  'text-on-primary-default',
  'text-on-primary-medium',
  'text-on-primary-subtle',
  'text-on-primary-strong',
  'text-on-secondary-default',
  'text-on-secondary-medium',
  'text-on-secondary-subtle',
  'text-on-secondary-strong',
  'text-on-tertiary-default',
  'text-on-tertiary-medium',
  'text-on-tertiary-subtle',
  'text-on-tertiary-strong',
  'text-on-data-default',
  'text-on-data-subtle',
  'icon-on-action',
  'icon-on-info-default',
  'icon-on-success-default',
  'icon-on-danger-default',
  'icon-on-warning-default',
  'icon-on-info-strong',
  'icon-on-success-strong',
  'icon-on-danger-strong',
  'icon-on-warning-strong',
  'icon-on-inverse',
  'icon-action-resting',
  'icon-action-hover',
  'icon-default',
  'icon-subtle',
  'icon-medium',
] as const;

const ICON_COLORS = [
  ...TEXT_COLORS,
  'brand-primary-default',
  'brand-primary-strong',
  'brand-primary-medium',
  'brand-primary-subtle',
  'brand-secondary-default',
  'brand-secondary-strong',
  'brand-secondary-medium',
  'brand-secondary-subtle',
  'brand-tertiary-default',
  'brand-tertiary-strong',
  'brand-tertiary-medium',
  'brand-tertiary-subtle',
] as const;

type DDSTextColor = (typeof TEXT_COLORS)[number];
type DDSIconColor = (typeof ICON_COLORS)[number];

const TEXT_COLOR_VALUES: Record<DDSTextColor, string> = TEXT_COLORS.reduce(
  (acc, key) => {
    acc[key] = `var(--dds-color-${key})`;
    return acc;
  },
  {} as Record<DDSTextColor, string>,
);

const ICON_COLOR_VALUES: Record<DDSIconColor, string> = ICON_COLORS.reduce(
  (acc, key) => {
    acc[key] = `var(--dds-color-${key})`;
    return acc;
  },
  {} as Record<DDSIconColor, string>,
);

export type TextColor = DDSTextColor | Property.Color;
export type IconColor = DDSIconColor | Property.Color;

export const isTextColor = (value: unknown): value is DDSTextColor => {
  return (
    typeof value === 'string' && TEXT_COLORS.includes(value as DDSTextColor)
  );
};

export const getTextColor = (color: TextColor): string => {
  if (isTextColor(color)) return TEXT_COLOR_VALUES[color];
  return color;
};

export const isIconColor = (value: unknown): value is DDSIconColor => {
  return (
    typeof value === 'string' && ICON_COLORS.includes(value as DDSIconColor)
  );
};

export const getIconColor = (color: IconColor): string => {
  if (isIconColor(color)) return ICON_COLOR_VALUES[color];
  return color;
};
