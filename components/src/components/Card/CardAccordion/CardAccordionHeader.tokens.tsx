import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  spacing: Spacing,
  fontPackages: FontPackages,
  border: Border,
  iconSizes: IconSizes,
} = ddsBaseTokens;

const base: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX15}`,
  ...FontPackages.heading_sans_03.base,
};

const focusBase: CSSObject = {
  boxShadow: `0 0 0 ${Border.BordersDdsBorderFocusCardStrokeWeight} ${Border.BordersDdsBorderFocusCardStroke}`,
};

const hoverBase: CSSObject = {
  boxShadow: `0 0 0 ${Border.BordersDdsBorderFocusInputfieldStrokeWeight} ${Border.BordersDdsBorderFocusInputfieldStroke}`,
};

const chevronWrapperBase: CSSObject = {
  width: IconSizes.DdsIconsizeMedium,
  height: IconSizes.DdsIconsizeMedium,
  marginLeft: Spacing.SizesDdsSpacingLocalX05,
};

export const cardAccordionHeaderTokens = {
  base: base,
  focus: {
    base: focusBase,
  },
  hover: {
    base: hoverBase,
  },
  chevronWrapper: {
    base: chevronWrapperBase,
  },
  chevron: {
    width: IconSizes.DdsIconsizeMedium,
    height: Spacing.SizesDdsSpacingLocalX05,
  },
};
