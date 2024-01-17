import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';
import { type Property } from 'csstype';

const { colors } = ddsBaseTokens;
const { textDefault } = ddsReferenceTokens;

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

export const hexToRGBA = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16),
    alpha = hex.length === 9 ? hex.slice(7, 9) : 'ff';

  return `rgba(${r}, ${g}, ${b}, ${convertAlpha(alpha, 'hex8', 'decimal')})`;
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
  interactive: colors.DdsColorInteractiveBase,
  primary: colors.DdsColorPrimaryBase,
  danger: colors.DdsColorDangerBase,
  success: colors.DdsColorSuccessBase,
  warning: colors.DdsColorWarningBase,
  onLight: textDefault.textColor,
  onDark: colors.DdsColorNeutralsWhite,
  gray1: colors.DdsColorNeutralsGray1,
  gray2: colors.DdsColorNeutralsGray2,
  gray3: colors.DdsColorNeutralsGray3,
  gray4: colors.DdsColorNeutralsGray4,
  gray5: colors.DdsColorNeutralsGray5,
  gray6: colors.DdsColorNeutralsGray6,
  gray7: colors.DdsColorNeutralsGray7,
  gray8: colors.DdsColorNeutralsGray8,
  gray9: colors.DdsColorNeutralsGray9,
};

export type DDSTextColor =
  | 'interactive'
  | 'primary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'onLight'
  | 'onDark'
  | 'gray1'
  | 'gray2'
  | 'gray3'
  | 'gray4'
  | 'gray5'
  | 'gray6'
  | 'gray7'
  | 'gray8'
  | 'gray9';

export const textColorsArray = [
  'interactive',
  'primary',
  'danger',
  'success',
  'warning',
  'onLight',
  'onDark',
  'gray1',
  'gray2',
  'gray3',
  'gray4',
  'gray5',
  'gray6',
  'gray7',
  'gray8',
  'gray9',
];

export type TextColor = DDSTextColor | Property.Color;

export function isTextColor(color: string): color is DDSTextColor {
  return textColorsArray.indexOf(color) !== -1;
}

export const getTextColor = (color: TextColor): TextColor => {
  if (isTextColor(color)) return textColors[color];
  return color;
};
