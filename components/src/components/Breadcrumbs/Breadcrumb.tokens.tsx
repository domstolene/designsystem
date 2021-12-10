import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  colors: Colors,
  spacing: Spacing,
  fontPackages: FontPackages
} = ddsBaseTokens;

const iconBase: CSSObject = {
  color: Colors.DdsColorInteractiveBase,
  marginLeft: Spacing.SizesDdsSpacingLocalX05,
  marginRight: Spacing.SizesDdsSpacingLocalX05
};

const breadcrumbBase: CSSObject = {
  ...FontPackages.body_sans_02.base
};

export const breadcrumbTokens = {
  breadcrumb: {
    base: breadcrumbBase
  },
  icon: {
    base: iconBase,
    size: 'small'
  }
};
