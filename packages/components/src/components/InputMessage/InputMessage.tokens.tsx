import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing } = ddsBaseTokens;

const message = {
  tip: {
    backgroundColor: colors.DdsColorNeutralsWhite,
  },
  error: {
    padding: `${spacing.SizesDdsSpacingX025} ${spacing.SizesDdsSpacingX05}`,
    backgroundColor: colors.DdsColorDangerLightest,
    gap: spacing.SizesDdsSpacingX025,
    icon: {
      color: colors.DdsColorDangerDark,
    },
  },
};

const icon = {
  marginTop: spacing.SizesDdsSpacingX0125,
};

export const inputMessageTokens = {
  message,
  icon,
};
