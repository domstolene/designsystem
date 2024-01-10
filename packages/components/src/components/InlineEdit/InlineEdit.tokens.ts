import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing, fontPackages } = ddsBaseTokens;

const inlineEdit = {
  padding: spacing.SizesDdsSpacingX025,
  font: fontPackages.body_sans_02.base,
  backgroundColor: 'transparent',
  withIcon: {
    paddingLeft: spacing.SizesDdsSpacingX2,
  },
  hover: {
    backgroundColor: colors.DdsColorInteractiveLightest,
  },
  focus: {
    backgroundColor: colors.DdsColorNeutralsWhite,
  },
};

const iconWrapper = {
  top: spacing.SizesDdsSpacingX05,
  left: spacing.SizesDdsSpacingX05,
};

export const inlineEditTokens = {
  inlineEdit,
  iconWrapper,
};
