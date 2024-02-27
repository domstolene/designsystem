import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

import { type StaticTypographyType } from '../Typography';

const { colors, spacing } = ddsBaseTokens;

export const typographyType: StaticTypographyType = 'bodySans02';

const icon = {
  color: colors.DdsColorInteractiveBase,
};

const listItem = {
  gap: spacing.SizesDdsSpacingX05,
  notSmallScreen: {
    padding: `${spacing.SizesDdsSpacingX0125} 0`,
  },
};

const list = {
  gap: spacing.SizesDdsSpacingX05,
};

export const breadcrumbTokens = {
  list,
  listItem,
  icon,
};
