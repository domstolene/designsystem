import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing } = ddsBaseTokens;

const message = {
  tip: {
    backgroundColor: colors.DdsColorNeutralsWhite,
    padding: `${spacing.SizesDdsSpacingLocalX025} 0`,
  },
  error: {
    padding: `${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX05}`,
    color: colors.DdsColorDangerBase,
    backgroundColor: colors.DdsColorDangerLightest,
    gap: spacing.SizesDdsSpacingLocalX05,
  },
};

const icon = {
  marginTop: spacing.SizesDdsSpacingLocalX0125,
};

export const inputMessageTokens = {
  message,
  icon,
};
