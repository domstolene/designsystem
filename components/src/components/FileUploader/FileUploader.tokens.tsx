import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing } = ddsBaseTokens;

export const rootTokens = {
  borderColor: colors.DdsColorNeutralsGray5,
  borderColorError: colors.DdsColorDangerBase,
  paddingLeftRightTop: spacing.SizesDdsSpacingLocalX15,
  paddingBottom: spacing.SizesDdsSpacingLocalX2,
  gap: spacing.SizesDdsSpacingLocalX1,
  backgroundColor: colors.DdsColorNeutralsWhite,
  dragActive: {
    borderColor: colors.DdsColorInteractiveBase,
    backgroundColor: colors.DdsColorInteractiveLightest,
  },
};

export const fileTokens = {
  marginTop: spacing.SizesDdsSpacingLocalX05,
  paddingLeftRight: spacing.SizesDdsSpacingLocalX05,
  paddingTopBottom: spacing.SizesDdsSpacingLayoutX1,
  backgroundColor: colors.DdsColorNeutralsGray1,
  textToIconsGap: spacing.SizesDdsSpacingLocalX075,
  invalid: {
    borderColor: colors.DdsColorDangerBase,
  },
};

export const errorsTokens = {
  gap: spacing.SizesDdsSpacingLocalX025,
};
