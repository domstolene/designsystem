import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { spacing, fontPackages } = ddsBaseTokens;
const { textDefault } = ddsReferenceTokens;

const base: CSSObject = {
  ...fontPackages.body_sans_03.base,
  display: 'flex',
  alignItems: 'center',
  gap: spacing.SizesDdsSpacingLocalX025,
  color: textDefault.textColor
};

const iconBase: CSSObject = {
  marginRight: spacing.SizesDdsSpacingLocalX025
};

export const descriptionListDescTokens = {
  base: base,
  icon: {
    base: iconBase
  }
};
