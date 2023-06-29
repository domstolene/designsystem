import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing } = ddsBaseTokens;

const groupContainer = {
  row: {
    gap: spacing.SizesDdsSpacingLocalX075,
  },
  column: { gap: spacing.SizesDdsSpacingLocalX05 },
};

const outerContainer = {
  gap: spacing.SizesDdsSpacingLocalX0125,
};

export const checkboxGroupTokens = {
  outerContainer,
  groupContainer,
};
