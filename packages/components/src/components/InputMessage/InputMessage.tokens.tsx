import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing } = ddsBaseTokens;

const message = {
  tip: {
    backgroundColor: colors.DdsColorNeutralsWhite,
  },
  error: {
    padding: `${spacing.SizesDdsSpacingX025} ${spacing.SizesDdsSpacingX05}`,
    color: colors.DdsColorDangerBase,
    backgroundColor: colors.DdsColorDangerLightest,
    gap: spacing.SizesDdsSpacingX05,
  },
};

const icon = {
  marginTop: spacing.SizesDdsSpacingX0125,
};

export const inputMessageTokens = {
  message,
  icon,
};
