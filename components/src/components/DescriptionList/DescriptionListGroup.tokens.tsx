import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { spacing: Spacing } = ddsBaseTokens;

const base: CSSObject = {
  margin: Spacing.SizesDdsSpacingLocalX15
};

export const descriptionListGroupTokens = {
  base: base
};
