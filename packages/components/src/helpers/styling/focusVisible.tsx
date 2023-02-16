import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { border: Border, colors: Colors, spacing } = ddsBaseTokens;

export const outlineOffset = spacing.SizesDdsSpacingLocalX0125;

export const focusVisible = {
  outline: `${Border.BordersDdsBorderFocusBaseStrokeWeight} ${Border.BordersDdsBorderFocusBaseStroke} solid`,
  outlineOffset: outlineOffset,
};

export const focusVisibleOnDark = {
  outline: `${Border.BordersDdsBorderFocusOndarkStrokeWeight} ${Border.BordersDdsBorderFocusOndarkStroke} solid`,
  outlineOffset: outlineOffset,
};

export const focusVisibleTransitionValue = 'outline-offset 0.2s';

export const focusVisibleLink = {
  outline: 'none',
  backgroundColor: Border.BordersDdsBorderFocusBaseStroke,
  color: Colors.DdsColorNeutralsWhite,
  textDecoration: 'none',
};

export const focusVisibleLinkOnDark = {
  outline: 'none',
  backgroundColor: Border.BordersDdsBorderFocusOndarkStroke,
  color: Colors.DdsColorNeutralsGray9,
  textDecoration: 'none',
};

export const focusVisibleLinkTransitionValue =
  'background-color 0.2s, text-decoration 0.2s, color 0.2s';

export const focusVisibleWithBorder = {
  outline: 'none',
  borderColor: Border.BordersDdsBorderFocusCardStroke,
  boxShadow: `inset 0 0 0 1px ${Border.BordersDdsBorderFocusCardStroke}`,
};

export const focusVisibleThickWithBorderOnDark = {
  outline: 'none',
  borderColor: Border.BordersDdsBorderFocusOndarkStroke,
  boxShadow: `inset 0 0 0 1px ${Border.BordersDdsBorderFocusOndarkStroke}`,
};

export const focusVisibleInset = {
  outline: 'none',
  boxShadow: `inset 0 0 0 2px ${Border.BordersDdsBorderFocusCardStroke}`,
};