import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';

const { colors, border } = ddsBaseTokens;
const { textDefault } = ddsReferenceTokens;

const base = {
  border: `${border.BordersDdsBorderStyleLightStrokeWeight} solid`,
};

const cardColors = {
  filledLight: {
    backgroundColor: colors.DdsColorPrimaryLightest,
    borderColor: colors.DdsColorPrimaryLightest,
    color: textDefault.textColor,
  },
  filledDark: {
    backgroundColor: colors.DdsColorPrimaryBase,
    borderColor: colors.DdsColorPrimaryBase,
    color: colors.DdsColorNeutralsWhite,
  },
  strokeDark: {
    backgroundColor: colors.DdsColorNeutralsWhite,
    borderColor: border.BordersDdsBorderStyleLightStroke,
    color: textDefault.textColor,
  },
  strokeLight: {
    backgroundColor: colors.DdsColorNeutralsWhite,
    borderColor: border.BordersDdsBorderStyleLightStroke,
    color: textDefault.textColor,
  },
};

export const cardTokens = {
  base: base,
  colors: cardColors,
};
