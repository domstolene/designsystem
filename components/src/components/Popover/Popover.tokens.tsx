import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  colors: Colors,
  borderRadius: BorderRadius,
  spacing: Spacing,
  outerShadow: OuterShadow,
  border: Border
} = ddsBaseTokens;

const wrapperBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
  padding: `${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX15} ${Spacing.SizesDdsSpacingLocalX1}`,
  boxShadow: OuterShadow.DdsShadow3Onlight,
  border: `${Border.BordersDdsBorderStyleLightStrokeWeight} solid ${Border.BordersDdsBorderStyleLightStroke}`
};

const buttonBase: CSSObject = {
  position: 'absolute',
  top: Spacing.SizesDdsSpacingLocalX025,
  right: Spacing.SizesDdsSpacingLocalX025
};

const titleBase: CSSObject = {
  marginRight: Spacing.SizesDdsSpacingLocalX2
};

export const popoverTokens = {
  wrapper: {
    base: wrapperBase
  },
  button: {
    base: buttonBase
  },
  title: {
    base: titleBase
  },
  content: {
    spaceTopNoTitle: Spacing.SizesDdsSpacingLocalX2
  }
};
