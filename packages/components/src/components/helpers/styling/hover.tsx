import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { border: Border, colors: Colors } = ddsBaseTokens;

export const hoverWithBorder = {
  borderColor: Border.BordersDdsBorderFocusInputfieldStroke,
  boxShadow: `inset 0 0 0 1px ${Border.BordersDdsBorderFocusInputfieldStroke}`,
};

export const hoverInputfield = {
  borderColor: Border.BordersDdsBorderFocusInputfieldStroke,
  boxShadow: `0 0 0 1px ${Border.BordersDdsBorderFocusInputfieldStroke}`,
};

export const hoverDangerInputfield = {
  borderColor: Colors.DdsColorDangerBase,
  boxShadow: `0 0 0 1px ${Colors.DdsColorDangerBase}`,
};
