import {
  borderRadius,
  breakpoints,
  colors,
  font,
  fontPackages,
  grid,
  iconSizes,
  outerShadow,
  spacing,
  ddsTokens as tokens,
} from '../dds';

export const ddsBaseTokens = {
  colors,
  font,
  breakpoints,
  borderRadius,
  spacing,
  iconSizes,
  grid,
  outerShadow,
  fontPackages,
};

export const ddsTokens = { ...tokens };
