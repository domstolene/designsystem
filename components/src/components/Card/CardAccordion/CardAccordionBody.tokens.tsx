import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { spacing: Spacing, fontPackages: FontPackages } = ddsBaseTokens;

const base: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX1} ${
    Spacing.SizesDdsSpacingLocalX2NumberPx +
    Spacing.SizesDdsSpacingLocalX075NumberPx
  }px ${Spacing.SizesDdsSpacingLocalX2} ${Spacing.SizesDdsSpacingLocalX15}`,
  ...FontPackages.body_sans_03.base,
};

export const cardAccordionBodyTokens = {
  base: base,
};
