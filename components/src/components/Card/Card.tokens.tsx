import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

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
  borderColor: Border.BordersDdsBorderFocusInputfieldStroke,
  boxShadow: `0 0 0 1px ${Border.BordersDdsBorderFocusInputfieldStroke}`
};

const navigationFocusBase: CSSObject = {
  borderColor: Border.BordersDdsBorderFocusCardStroke,
  boxShadow: `0 0 0 1px ${Border.BordersDdsBorderFocusCardStroke}`
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
  borderColor: Colors.DdsColorNeutralsGray5,
  color: textDefault.textColor
};

const strokeDarkBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  borderColor: Colors.DdsColorNeutralsGray9,
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
