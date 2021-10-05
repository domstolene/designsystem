import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { spacing: Spacing } = ddsBaseTokens;

const base: CSSObject = {
  lineHeight: '2.5em'
};

export const listItemTokens = {
  base: base,
  bulletSpacing: Spacing.SizesDdsSpacingLocalX025
};
