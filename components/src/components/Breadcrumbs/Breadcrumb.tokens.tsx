import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { colors: Colors, spacing: Spacing } = ddsBaseTokens;

const iconBase: CSSObject = {
  color: Colors.DdsColorInteractiveBase,
  marginLeft: Spacing.SizesDdsSpacingLocalX05,
  marginRight: Spacing.SizesDdsSpacingLocalX05
};

export const breadcrumbTokens = {
  icon: {
    base: iconBase,
    size: 'small'
  }
};
