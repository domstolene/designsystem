import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { border: Border, spacing } = ddsBaseTokens;

export const outlineOffset = spacing.SizesDdsSpacingX0125;

export const focusVisible = {
  outline: `${Border.BordersDdsBorderFocusBaseStrokeWeight} ${Border.BordersDdsBorderFocusBaseStroke} solid`,
  outlineOffset: outlineOffset,
};
export const focusVisibleCard = {
  outline: `${Border.BordersDdsBorderFocusCardStrokeWeight} ${Border.BordersDdsBorderFocusCardStroke} solid`,
  outlineOffset: outlineOffset,
};

export const focusVisibleOnDark = {
  outline: `${Border.BordersDdsBorderFocusOndarkStrokeWeight} ${Border.BordersDdsBorderFocusOndarkStroke} solid`,
  outlineOffset: outlineOffset,
};

export const focusVisibleTransitionValue = 'outline-offset 0.2s';

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
