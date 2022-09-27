import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { border } = ddsBaseTokens;

export const focusInputfield = {
  outline: 'none',
  borderColor: border.BordersDdsBorderFocusInputfieldStroke,
  boxShadow: `0 0 0 2px ${border.BordersDdsBorderFocusInputfieldStroke}`,
};

export const focusDangerInputfield = {
  borderColor: border.BordersDdsBorderFocusInputfieldStroke,
  boxShadow: `0 0 0 2px ${border.BordersDdsBorderFocusInputfieldStroke}`,
};
