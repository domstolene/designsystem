import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { border: Border, colors: Colors } = ddsBaseTokens;

export const focusInputfield = {
  outline: 'none',
  borderColor: Border.BordersDdsBorderFocusInputfieldStroke,
  boxShadow: `inset 0 0 0 1px ${Border.BordersDdsBorderFocusInputfieldStroke}`
};

export const focusDangerInputfield = {
  borderColor: Colors.DdsColorDangerDarker,
  boxShadow: `inset 0 0 0 1px ${Colors.DdsColorDangerDarker}`
};
