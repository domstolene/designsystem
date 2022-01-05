import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { spacing: Spacing, fontPackages: FontPackages } = ddsBaseTokens;
const { textDefault } = ddsReferenceTokens;

const base: CSSObject = {
  ...FontPackages.body_sans_03.base,
  color: textDefault.textColor
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
