import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  colors: Colors,
  borderRadius: BorderRadius,
  outerShadow: OuterShadow
} = ddsBaseTokens;

const base: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
  boxShadow: OuterShadow.DdsShadow4Onlight
};

export const paperTokens = {
  base: base
};
