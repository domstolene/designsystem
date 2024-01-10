import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
const { spacing } = ddsBaseTokens;

const spacingTokens = {
  'x0.125': spacing.SizesDdsSpacingX0125,
  'x0.25': spacing.SizesDdsSpacingX025,
  'x0.5': spacing.SizesDdsSpacingX05,
  'x0.75': spacing.SizesDdsSpacingX075,
  x1: spacing.SizesDdsSpacingX1,
  'x1.5': spacing.SizesDdsSpacingX15,
  x2: spacing.SizesDdsSpacingX2,
  'x2.5': spacing.SizesDdsSpacingX25,
  x3: spacing.SizesDdsSpacingX3,
  x4: spacing.SizesDdsSpacingX4,
  x6: spacing.SizesDdsSpacingX6,
  x10: spacing.SizesDdsSpacingX10,
};

export const stackTokens = {
  spacing: spacingTokens,
};
