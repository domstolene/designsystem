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

export const textColors = {
  textOnAction: 'var(--dds-color-text-on-action)',
  textOnInverse: 'var(--dds-color-text-on-inverse)',
  textOnStatusDefault: 'var(--dds-color-text-on-status-default)',
  textOnStatusStrong: 'var(--dds-color-text-on-status-strong)',
  textActionResting: 'var(--dds-color-text-action-resting)',
  textActionHover: 'var(--dds-color-text-action-hover)',
  textActionVisited: 'var(--dds-color-text-action-visited)',
  textDefault: 'var(--dds-color-text-default)',
  textRequiredfield: 'var(--dds-color-text-requiredfield)',
  textSubtle: 'var(--dds-color-text-subtle)',
  textMedium: 'var(--dds-color-text-medium)',
  textOnNotification: 'var(--dds-color-text-on-notification)',

  iconOnAction: 'var(--dds-color-icon-on-action)',
  iconOnInfoDefault: 'var(--dds-color-icon-on-info-default)',
  iconOnSuccessDefault: 'var(--dds-color-icon-on-success-default)',
  iconOnDangerDefault: 'var(--dds-color-icon-on-danger-default)',
  iconOnWarningDefault: 'var(--dds-color-icon-on-warning-default)',
  iconOnInfoStrong: 'var(--dds-color-icon-on-info-strong)',
  iconOnSuccessStrong: 'var(--dds-color-icon-on-success-strong)',
  iconOnDangerStrong: 'var(--dds-color-icon-on-danger-strong)',
  iconOnWarningStrong: 'var(--dds-color-icon-on-warning-strong)',
  iconOnInverse: 'var(--dds-color-icon-on-inverse)',
  iconActionResting: 'var(--dds-color-icon-action-resting)',
  iconActionHover: 'var(--dds-color-icon-action-hover)',
  iconDefault: 'var(--dds-color-icon-default)',
  iconSubtle: 'var(--dds-color-icon-subtle)',
  iconMedium: 'var(--dds-color-icon-medium)',
};

export type DDSTextColor =
  | 'textOnAction'
  | 'textOnInverse'
  | 'textOnStatusDefault'
  | 'textOnStatusStrong'
  | 'textActionResting'
  | 'textActionHover'
  | 'textActionVisited'
  | 'textDefault'
  | 'textRequiredfield'
  | 'textSubtle'
  | 'textMedium'
  | 'textOnNotification'
  | 'iconOnAction'
  | 'iconOnInfoDefault'
  | 'iconOnSuccessDefault'
  | 'iconOnDangerDefault'
  | 'iconOnWarningDefault'
  | 'iconOnInfoStrong'
  | 'iconOnSuccessStrong'
  | 'iconOnDangerStrong'
  | 'iconOnWarningStrong'
  | 'iconOnInverse'
  | 'iconActionResting'
  | 'iconActionHover'
  | 'iconDefault'
  | 'iconSubtle'
  | 'iconMedium';

export const textColorsArray = [
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
];

export type TextColor = DDSTextColor | Property.Color;

export function isTextColor(color: string): color is DDSTextColor {
  return textColorsArray.indexOf(color) !== -1;
}

export const getTextColor = (color: TextColor): TextColor => {
  if (isTextColor(color)) return textColors[color];
  return color;
};
