import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing, colors } = ddsBaseTokens;

const list = {
  gap: spacing.SizesDdsSpacingX075,
};

const truncationIcon = {
  color: colors.DdsColorNeutralsGray7,
};

const outerContainer = {
  gap: spacing.SizesDdsSpacingX075,
};
const indicatorsContainer = {
  gap: spacing.SizesDdsSpacingX075,
};

export const paginationTokens = {
  outerContainer,
  indicatorsContainer,
  truncationIcon,
  list,
};
