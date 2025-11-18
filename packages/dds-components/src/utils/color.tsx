import { type Property } from 'csstype';

export type ColorAlphaFormat = 'hex8' | 'decimal';

export const convertAlpha = (
  value: number | string,
  typeFrom: ColorAlphaFormat,
  typeTo: ColorAlphaFormat,
) => {
  if (typeFrom === 'decimal' && typeTo === 'hex8') {
    const numberValue = Number(value);

    if (typeof numberValue !== 'number' || numberValue > 1 || numberValue < 0)
      return '';
    const hex8 = Math.round(
      255 * (Math.round(numberValue * 100) / 100),
    ).toString(16);

    return hex8.length === 1 ? '0' + hex8 : hex8;
  }
  if (typeFrom === 'hex8' && typeTo === 'decimal') {
    const regexCheck = new RegExp(/^[0-9a-fA-F]+$/).test(value.toString());
    if (value.toString().length > 2 || regexCheck === false) return '';
    const decimal =
      Math.round((parseInt(value.toString(), 16) / 256) * 100) / 100;
    return decimal;
  }
};

export const hexToRGBValues = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return [r, g, b].join(', ');
};

export const hexToRGBA = (hex: string): string => {
  const alpha = hex.length === 9 ? hex.slice(7, 9) : 'ff';

  return `rgba(${hexToRGBValues(hex)}, ${convertAlpha(alpha, 'hex8', 'decimal')})`;
};

const getRGBValues = (value: string) =>
  value.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i);

export const addAlphaToRGB = (rgb: string, alpha: number | string) => {
  const values = getRGBValues(rgb);

  return values
    ? `rgba(${values[1]}, ${values[2]}, ${values[3]}, ${alpha})`
    : '';
};

export const RGBToHex = (value: string): string => {
  const rgb = getRGBValues(value);
  const alpha = (rgb?.[4] ?? '').trim();
  const hex = rgb
    ? '#' +
      (parseInt(rgb[1]) | (1 << 8)).toString(16).slice(1) +
      (parseInt(rgb[2]) | (1 << 8)).toString(16).slice(1) +
      (parseInt(rgb[3]) | (1 << 8)).toString(16).slice(1) +
      convertAlpha(alpha, 'decimal', 'hex8')
    : '';

  return hex;
};

export const changeRGBAAlpha = (value: string, alpha: number): string => {
  if (!value.startsWith('rgba(') || !value.endsWith(')')) {
    return '';
  }

  return value.replace(/[\d.]+\)$/g, alpha.toString() + ')');
};

/**
 * Tekstfarger i kebab-case; camelCase blir deprecated, og kebab-case blir standarden for props som refererer til CSS-variabler.
 * TODO: fjerne cameCase på et tidspunkt.
 */
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

const TEXT_COLORS_CAMEL = [
  'textOnAction',
  'textOnInverse',
  'textOnStatusDefault',
  'textOnStatusStrong',
  'textActionResting',
  'textActionHover',
  'textActionVisited',
  'textDefault',
  'textRequiredfield',
  'textSubtle',
  'textMedium',
  'textOnNotification',
  'iconOnAction',
  'iconOnInfoDefault',
  'iconOnSuccessDefault',
  'iconOnDangerDefault',
  'iconOnWarningDefault',
  'iconOnInfoStrong',
  'iconOnSuccessStrong',
  'iconOnDangerStrong',
  'iconOnWarningStrong',
  'iconOnInverse',
  'iconActionResting',
  'iconActionHover',
  'iconDefault',
  'iconSubtle',
  'iconMedium',
] as const;

type DDSTextColor = (typeof TEXT_COLORS)[number];
type DDSTextColorCamel = (typeof TEXT_COLORS_CAMEL)[number];

const TEXT_COLOR_VALUES_CAMEL: Record<DDSTextColorCamel, string> =
  TEXT_COLORS_CAMEL.reduce(
    (acc, key) => {
      const kebab = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      acc[key] = `var(--dds-color-${kebab})`;
      return acc;
    },
    {} as Record<DDSTextColorCamel, string>,
  );

const TEXT_COLOR_VALUES_KEBAB: Record<DDSTextColor, string> =
  TEXT_COLORS.reduce(
    (acc, key) => {
      acc[key] = `var(--dds-color-${key})`;
      return acc;
    },
    {} as Record<DDSTextColor, string>,
  );

export type TextColor = DDSTextColor | DDSTextColorCamel | Property.Color;

export const isTextColorCamel = (
  value: unknown,
): value is DDSTextColorCamel => {
  return (
    typeof value === 'string' &&
    TEXT_COLORS_CAMEL.includes(value as DDSTextColorCamel)
  );
};

export const isTextColor = (value: unknown): value is DDSTextColor => {
  return (
    typeof value === 'string' && TEXT_COLORS.includes(value as DDSTextColor)
  );
};

export const getTextColor = (color: TextColor): string => {
  if (isTextColorCamel(color)) return TEXT_COLOR_VALUES_CAMEL[color];
  if (isTextColor(color)) return TEXT_COLOR_VALUES_KEBAB[color];
  return color;
};
