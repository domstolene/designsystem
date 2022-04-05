import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { border: Border } = ddsBaseTokens;

export const focusVisible = {
  outline: `${Border.BordersDdsBorderFocusBaseStrokeWeight} ${Border.BordersDdsBorderFocusBaseStroke} solid`,
  outlineOffset: '1px'
};
