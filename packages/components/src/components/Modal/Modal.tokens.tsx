import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing } = ddsBaseTokens;

const container = {
  padding: `${spacing.SizesDdsSpacingLocalX1} ${spacing.SizesDdsSpacingLocalX1} ${spacing.SizesDdsSpacingLocalX15} ${spacing.SizesDdsSpacingLocalX15}`,
};

const contentContainer = {
  paddingRight: spacing.SizesDdsSpacingLocalX1,
  gap: spacing.SizesDdsSpacingLocalX1,
};
const actionsContainer = {
  gap: spacing.SizesDdsSpacingLocalX1,
};

export const modalTokens = {
  container,
  contentContainer,
  actionsContainer,
};
