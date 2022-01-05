import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  spacing: Spacing,
  fontPackages: FontPackages,
  colors: Colors
} = ddsBaseTokens;

const base: CSSObject = {
  padding: Spacing.SizesDdsSpacingLocalX1,
  ...FontPackages.heading_sans_03.base
};

const focusBase: CSSObject = {
  boxShadow: `0 0 0 2px ${Colors.DdsColorWarningDarkest}`
};

const hoverBase: CSSObject = {
  boxShadow: `0 0 0 2px ${Colors.DdsColorInteractiveBase}`
};

export const cardAccordionHeaderTokens = {
  base: base,
  focus: {
    base: focusBase
  },
  hover: {
    base: hoverBase
  }
};
