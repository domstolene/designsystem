import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
const { spacing } = ddsBaseTokens;

const gapTokens = {
  'local-x0.125': spacing.SizesDdsSpacingLocalX0125,
  'local-x0.25': spacing.SizesDdsSpacingLocalX025,
  'local-x0.5': spacing.SizesDdsSpacingLocalX05,
  'local-x0.75': spacing.SizesDdsSpacingLocalX075,
  'local-x1': spacing.SizesDdsSpacingLocalX1,
  'local-x1.5': spacing.SizesDdsSpacingLocalX15,
  'local-x2': spacing.SizesDdsSpacingLocalX2,
  'local-x2.5': spacing.SizesDdsSpacingLocalX25,
  'local-x3': spacing.SizesDdsSpacingLocalX3,
  'layout-x1': spacing.SizesDdsSpacingLayoutX1,
  'layout-x1.5': spacing.SizesDdsSpacingLayoutX15,
  'layout-x2': spacing.SizesDdsSpacingLayoutX2,
  'layout-x3': spacing.SizesDdsSpacingLayoutX3,
  'layout-x4': spacing.SizesDdsSpacingLayoutX4,
  'layout-x6': spacing.SizesDdsSpacingLayoutX6,
  'layout-x10': spacing.SizesDdsSpacingLayoutX10,
};

export const stackTokens = {
  gap: gapTokens,
};
