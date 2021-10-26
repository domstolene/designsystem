import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { colors: Colors, border: Border } = ddsBaseTokens;

const base: CSSObject = {
  border: `${Border.BordersDdsBorderStyle1StrokeWeight} solid`
};

const navigationHoverBase: CSSObject = {
  borderColor: Colors.DdsColorInteractiveBase,
  boxShadow: `0 0 0 1px ${Colors.DdsColorInteractiveBase}`
};

const navigationFocusBase: CSSObject = {
  borderColor: Colors.DdsColorWarningDarkest,
  boxShadow: `0 0 0 1px ${Colors.DdsColorWarningDarkest}`
};

const filledDarkBase: CSSObject = {
  backgroundColor: Colors.DdsColorPrimaryBase,
  borderColor: Colors.DdsColorPrimaryBase,
  color: Colors.DdsColorNeutralsWhite
};

const filledLightBase: CSSObject = {
  backgroundColor: Colors.DdsColorPrimaryLightest,
  borderColor: Colors.DdsColorPrimaryLightest
};

const strokeLightBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  borderColor: Colors.DdsColorNeutralsGray5
};

const strokeDarkBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  borderColor: Colors.DdsColorNeutralsGray9
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
