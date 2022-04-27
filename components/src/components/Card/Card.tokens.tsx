import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { hoverWithBorder } from '../../helpers/styling';
import { focusVisibleWithBorder } from '../../helpers/styling/focusVisible';

const {
  colors: Colors,
  border: Border,
  fontPackages: FontPackages
} = ddsBaseTokens;
const { textDefault } = ddsReferenceTokens;

const base: CSSObject = {
  border: `${Border.BordersDdsBorderStyleLightStrokeWeight} solid`,
  ...FontPackages.body_sans_02.base
};

const navigationHoverBase: CSSObject = {
  // borderColor: Border.BordersDdsBorderFocusInputfieldStroke,
  // boxShadow: `0 0 0 1px ${Border.BordersDdsBorderFocusInputfieldStroke}`
  ...hoverWithBorder
};

const navigationFocusBase: CSSObject = {
  // borderColor: Border.BordersDdsBorderFocusCardStroke,
  // boxShadow: `0 0 0 1px ${Border.BordersDdsBorderFocusCardStroke}`
  ...focusVisibleWithBorder
};

const filledDarkBase: CSSObject = {
  backgroundColor: Colors.DdsColorPrimaryBase,
  borderColor: Colors.DdsColorPrimaryBase,
  color: Colors.DdsColorNeutralsWhite
};

const filledLightBase: CSSObject = {
  backgroundColor: Colors.DdsColorPrimaryLightest,
  borderColor: Colors.DdsColorPrimaryLightest,
  color: textDefault.textColor
};

const strokeLightBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  borderColor: Border.BordersDdsBorderStyleLightStroke,
  color: textDefault.textColor
};

const strokeDarkBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  borderColor: Border.BordersDdsBorderStyleDarkStroke,
  color: textDefault.textColor
};

export const cardTokens = {
  base: base,
  navigation: {
    hover: {
      base: navigationHoverBase
    },
    focus: {
      base: navigationFocusBase
    }
  },
  colors: {
    filledDark: {
      base: filledDarkBase
    },
    filledLight: {
      base: filledLightBase
    },
    strokeLight: {
      base: strokeLightBase
    },
    strokeDark: {
      base: strokeDarkBase
    }
  }
};
