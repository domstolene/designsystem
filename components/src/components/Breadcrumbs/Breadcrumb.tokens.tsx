import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing, fontPackages } = ddsBaseTokens;

const icon = {
  color: colors.DdsColorInteractiveBase,
};

const listItem = {
  font: fontPackages.body_sans_02.base,
  gap: spacing.SizesDdsSpacingLocalX05,
};

const list = {
  gap: spacing.SizesDdsSpacingLocalX05,
};

export const breadcrumbTokens = {
  list,
  listItem,
  icon,
};
