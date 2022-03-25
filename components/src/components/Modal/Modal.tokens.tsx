import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  borderRadius: BorderRadius,
  colors: Colors,
  outerShadow: OuterShadow,
  spacing: Spacing
} = ddsBaseTokens;

const base: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  boxShadow: OuterShadow.DdsShadow4Onlight,
  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
  padding: `${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX15} ${Spacing.SizesDdsSpacingLocalX15}`
};

const contentContainerBase: CSSObject = {
  paddingRight: Spacing.SizesDdsSpacingLocalX1,
  gap: Spacing.SizesDdsSpacingLocalX1
};
const controlsContainerBase: CSSObject = {
  gap: Spacing.SizesDdsSpacingLocalX1
};

export const modalTokens = {
  base: base,
  contentContainer: {
    base: contentContainerBase
  },
  controlsContainer: {
    base: contentContainerBase
  }
};
