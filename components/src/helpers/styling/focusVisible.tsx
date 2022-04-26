import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { border: Border, colors: Colors } = ddsBaseTokens;

export const outlineOffset = '2px';

export const focusVisible = {
  outline: `${Border.BordersDdsBorderFocusBaseStrokeWeight} ${Border.BordersDdsBorderFocusBaseStroke} solid`,
  outlineOffset: outlineOffset
};

export const focusVisibleOnDark = {
  outline: `${Border.BordersDdsBorderFocusBaseStrokeWeight} ${Colors.DdsColorWarningLighter} solid`,
  outlineOffset: outlineOffset
};

export const focusVisibleLink = {
  outline: 'none',
  backgroundColor: Border.BordersDdsBorderFocusBaseStroke,
  color: Colors.DdsColorNeutralsWhite
};

export const focusVisibleLinkOnDark = {
  outline: 'none',
  backgroundColor: Colors.DdsColorWarningLighter,
  color: Colors.DdsColorNeutralsGray9
};

export const focusVisibleWithBorder = {
  outline: 'none',
  borderColor: Border.BordersDdsBorderFocusCardStroke,
  boxShadow: `inset 0 0 0 1px ${Border.BordersDdsBorderFocusCardStroke}`
};

export const focusVisibleThickWithBorderOnDark = {
  outline: 'none',
  borderColor: Colors.DdsColorWarningLighter,
  boxShadow: `inset 0 0 0 1px ${Colors.DdsColorWarningLighter}`
};

export const focusVisibleInset = {
  outline: 'none',
  boxShadow: `inset 0 0 0 2px ${Border.BordersDdsBorderFocusCardStroke}`
};
