import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  colors: Colors,
  borderRadius: BorderRadius,
  outerShadow: OuterShadow,
  font: Font
} = ddsBaseTokens;

const base: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
  boxShadow: OuterShadow.DdsShadow4Onlight,
  fontFamily: Font.DdsFontBodySans01FontFamily
};

export const paperTokens = {
  base: base
};
