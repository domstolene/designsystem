import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { focusVisibleOnDark } from '../../helpers/styling';

const {
  colors: Colors,
  spacing: Spacing,
  fontPackages: FontPackages,
  border: Border,
} = ddsBaseTokens;

const linkBase: CSSObject = {
  color: Colors.DdsColorNeutralsWhite,
  ...FontPackages.body_sans_02.base,
  textDecoration: 'none',
};

const linkHoverBase: CSSObject = {
  color: Colors.DdsColorNeutralsWhite,
};

const linkFocusBase: CSSObject = {
  ...focusVisibleOnDark,
};

const wrapperBase: CSSObject = {
  backgroundColor: Colors.DdsColorPrimaryBase,
  padding: Spacing.SizesDdsSpacingLocalX025,
};

export const skipToContentTokens = {
  link: {
    base: linkBase,
    hover: {
      base: linkHoverBase,
    },
    focus: {
      base: linkFocusBase,
    },
    focusOutline: {
      color: Colors.DdsColorWarningDark,
      width: Border.BordersDdsBorderFocusBaseStrokeWeight,
    },
  },
  wrapper: {
    base: wrapperBase,
  },
};
