import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing, fontPackages } = ddsBaseTokens;

const inlineEdit = {
  padding: spacing.SizesDdsSpacingLocalX025,
  font: fontPackages.body_sans_02.base,
  backgroundColor: 'transparent',
  withIcon: {
    paddingLeft: spacing.SizesDdsSpacingLocalX2,
  },
  hover: {
    backgroundColor: colors.DdsColorInteractiveLightest,
  },
  focus: {
    backgroundColor: colors.DdsColorNeutralsWhite,
  },
};

const iconWrapper = {
  top: spacing.SizesDdsSpacingLocalX05,
  left: spacing.SizesDdsSpacingLocalX05,
};

export const inlineEditTokens = {
  inlineEdit,
  iconWrapper,
};