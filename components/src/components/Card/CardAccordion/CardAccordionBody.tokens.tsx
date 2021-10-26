import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { spacing: Spacing, fontPackages: FontPackages } = ddsBaseTokens;

const base: CSSObject = {
  padding: `0 ${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX1}`,
  ...FontPackages.body_sans_03.base
};

export const cardAccordionBodyTokens = {
  base: base
};
