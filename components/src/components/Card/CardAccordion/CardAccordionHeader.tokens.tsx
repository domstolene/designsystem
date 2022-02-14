import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  spacing: Spacing,
  fontPackages: FontPackages,
  border: Border
} = ddsBaseTokens;

const base: CSSObject = {
  padding: Spacing.SizesDdsSpacingLocalX1,
  ...FontPackages.heading_sans_03.base
};

const focusBase: CSSObject = {
  boxShadow: `0 0 0 ${Border.BordersDdsBorderFocusCardStrokeWeight} ${Border.BordersDdsBorderFocusCardStroke}`
};

const hoverBase: CSSObject = {
  boxShadow: `0 0 0 ${Border.BordersDdsBorderFocusInputfieldStrokeWeight} ${Border.BordersDdsBorderFocusInputfieldStroke}`
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
