import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  border: Border,
  colors: Colors,
  fontPackages: FontPackages,
  spacing: Spacing,
  outerShadow: OuterShadow,
  borderRadius: BorderRadius
} = ddsBaseTokens;

const wrapperBase: CSSObject = {
  border: `${Border.BordersDdsBorderStyleLightStroke} solid ${Border.BordersDdsBorderFocusBaseStrokeWeight}`,
  backgroundColor: Colors.DdsColorNeutralsWhite,
  ...FontPackages.body_sans_02.base,
  padding: `${Spacing.SizesDdsSpacingLocalX075}`,
  boxShadow: OuterShadow.DdsShadow1Onlight,
  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius
};

const arrowPlacementTemplate = {
  top: '-18px',
  bottom: '-15px',
  left: '-22.5px',
  right: '-22.5px'
};

export const tooltipTokens = {
  wrapper: {
    base: wrapperBase
  },
  svgArrow: {
    border: {
      fill: Colors.DdsColorPrimaryLighter
    },
    background: {
      fill: Colors.DdsColorNeutralsWhite
    }
  },
  arrowPlacementTemplate: arrowPlacementTemplate,
  offset: Spacing.SizesDdsSpacingLocalX05NumberPx
};
