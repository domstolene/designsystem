import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { colors, spacing, fontPackages } = ddsBaseTokens;

const iconBase: CSSObject = {
  color: colors.DdsColorInteractiveBase,
  marginLeft: spacing.SizesDdsSpacingLocalX05,
};

const breadcrumbBase: CSSObject = {
  ...fontPackages.body_sans_02.base,
  gap: spacing.SizesDdsSpacingLocalX05,
};

export const breadcrumbTokens = {
  breadcrumb: {
    base: breadcrumbBase,
  },
  icon: {
    base: iconBase,
    size: 'small',
  },
};
