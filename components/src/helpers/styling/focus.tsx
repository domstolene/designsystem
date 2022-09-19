import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { border: Border, colors: Colors } = ddsBaseTokens;

export const focusInputfield = {
  outline: 'none',
  borderColor: Border.BordersDdsBorderFocusInputfieldStroke,
  boxShadow: `0 0 0 2px ${Border.BordersDdsBorderFocusInputfieldStroke}`,
};

export const focusDangerInputfield = {
  borderColor: Border.BordersDdsBorderFocusInputfieldStroke,
  boxShadow: `0 0 0 2px ${Border.BordersDdsBorderFocusInputfieldStroke}`,
};
