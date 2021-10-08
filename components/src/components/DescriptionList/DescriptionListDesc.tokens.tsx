import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { spacing: Spacing, fontPackages: FontPackages } = ddsBaseTokens;

const base: CSSObject = {
  ...FontPackages.body_sans_03.base
};

const iconBase: CSSObject = {
  marginRight: Spacing.SizesDdsSpacingLocalX025
};

export const descriptionListDescTokens = {
  base: base,
  icon: {
    base: iconBase
  }
};
