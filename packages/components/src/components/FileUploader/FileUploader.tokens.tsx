import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing } = ddsBaseTokens;

export const rootTokens = {
  borderColor: colors.DdsColorNeutralsGray5,
  borderColorError: colors.DdsColorDangerBase,
  paddingLeftRightTop: spacing.SizesDdsSpacingX15,
  paddingBottom: spacing.SizesDdsSpacingX2,
  gap: spacing.SizesDdsSpacingX1,
  backgroundColor: colors.DdsColorNeutralsWhite,
  dragActive: {
    borderColor: colors.DdsColorInteractiveBase,
    backgroundColor: colors.DdsColorInteractiveLightest,
  },
};

export const noZoneContainerTokens = {
  padding: [spacing.SizesDdsSpacingX05, 0].join(' '),
};

export const fileTokens = {
  marginTop: spacing.SizesDdsSpacingX05,
  paddingLeftRight: spacing.SizesDdsSpacingX05,
  paddingTopBottom: spacing.SizesDdsSpacingX1,
  backgroundColor: colors.DdsColorNeutralsGray1,
  textToIconsGap: spacing.SizesDdsSpacingX075,
  invalid: {
    borderColor: colors.DdsColorDangerBase,
  },
};

export const errorsTokens = {
  gap: spacing.SizesDdsSpacingX025,
};
