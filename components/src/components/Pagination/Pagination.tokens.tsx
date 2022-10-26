import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing, colors } = ddsBaseTokens;

const list = {
  gap: spacing.SizesDdsSpacingLocalX075,
};

const truncationIcon = {
  color: colors.DdsColorNeutralsGray7,
};

const outerContainer = {
  gap: spacing.SizesDdsSpacingLocalX075,
};
const indicatorsContainer = {
  gap: spacing.SizesDdsSpacingLocalX075,
};

export const paginationTokens = {
  outerContainer,
  indicatorsContainer,
  truncationIcon,
  list,
};
