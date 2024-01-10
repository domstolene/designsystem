import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing } = ddsBaseTokens;

const container = {
  padding: `${spacing.SizesDdsSpacingX1} ${spacing.SizesDdsSpacingX1} ${spacing.SizesDdsSpacingX15} ${spacing.SizesDdsSpacingX15}`,
};

const contentContainer = {
  paddingRight: spacing.SizesDdsSpacingX1,
  gap: spacing.SizesDdsSpacingX1,
};
const actionsContainer = {
  gap: spacing.SizesDdsSpacingX1,
};

export const modalTokens = {
  container,
  contentContainer,
  actionsContainer,
};
