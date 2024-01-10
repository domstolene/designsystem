import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing } = ddsBaseTokens;

const link = {
  base: {
    color: colors.DdsColorNeutralsWhite,
  },
  hover: {
    color: colors.DdsColorNeutralsWhite,
  },
};

const wrapper = {
  backgroundColor: colors.DdsColorPrimaryBase,
  padding: spacing.SizesDdsSpacingX025,
};

export const skipToContentTokens = {
  link,
  wrapper,
};
