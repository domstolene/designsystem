import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  colors: Colors,
  fontPackages: FontPackages,
  spacing: Spacing
} = ddsBaseTokens;

const { focus, textDefault, inputLabel } = ddsReferenceTokens;

export const textColors = {
  primary: Colors.DdsColorPrimaryBase,
  danger: Colors.DdsColorDangerBase,
  success: Colors.DdsColorSuccessBase,
  warning: Colors.DdsColorWarningBase
};

const pBase: CSSObject = {
  ...textDefault.font,
  color: textDefault.textColor
};

const aBase: CSSObject = {
  color: Colors.DdsColorPrimaryBase,
  ...FontPackages.sansRegularx1,
  textDecoration: 'underline',
  width: 'fit-content',
  padding: `0 ${Spacing.SizesDdsSpacingLocalX0125}`
};

const aHoverBase: CSSObject = {
  color: Colors.DdsColorPrimaryDarker
};

const aFocusBase: CSSObject = {
  backgroundColor: Colors.DdsColorWarningDarkest,
  color: Colors.DdsColorNeutralsWhite,
  textDecoration: 'none',
  outline: 'none'
};

const aBoldBase: CSSObject = {
  ...FontPackages.sansBoldx1
};

const inputLabelBase: CSSObject = {
  color: inputLabel.textColor,
  ...inputLabel.font.base,
  margin: 0
};

export const typographyTokens = {
  p: {
    base: pBase
  },
  a: {
    base: aBase,
    hover: {
      base: aHoverBase
    },
    focus: {
      base: aFocusBase
    },
    bold: {
      base: aBoldBase
    },
    icon: {
      marginLeft: Spacing.SizesDdsSpacingLocalX0125
    }
  },
  inputLabel: {
    base: inputLabelBase
  }
};
