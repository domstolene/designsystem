import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { StaticTypographyType } from '../Typography';

const { colors, spacing } = ddsBaseTokens;

export const typographyType: StaticTypographyType = 'bodySans02';

const icon = {
  color: colors.DdsColorInteractiveBase,
};

const listItem = {
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
