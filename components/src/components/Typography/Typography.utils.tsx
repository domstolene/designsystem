import { textColors } from './Typography.tokens';
import {
  TypographyType,
  TypographyHeadingType,
  TextColor,
} from './Typography.types';

export const isHeading = (
  type: TypographyType
): type is TypographyHeadingType => {
  return true;
};

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

export function isTextColor(color: string): color is TextColor {
  return textColorsArray.indexOf(color) !== -1;
}

export const getTextColor = (color: TextColor | string): string => {
  if (isTextColor(color)) return textColors[color];
  return color;
};
