import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { focusVisibleLink } from '../../helpers/styling';

const {
  border: Border,
  colors: Colors,
  spacing: Spacing,
  fontPackages: FontPackages
} = ddsBaseTokens;

const borderColor = Border.BordersDdsBorderStyleLightStroke;

const linkBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray9,
  textDecoration: 'none',
  backgroundColor: Colors.DdsColorNeutralsWhite,
  ...FontPackages.body_sans_01.base
};

const linkHoverBase: CSSObject = {
  color: Colors.DdsColorInteractiveDark,
  backgroundColor: Colors.DdsColorPrimaryLightest
};

const linkActiveBase: CSSObject = {
  color: Colors.DdsColorInteractiveBase
};

const wrapperBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite
};

const applicationNameWrapperBase: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX15}`
};

const lovisaWrapperBase: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX15}`,
  borderRight: `${Border.BordersDdsBorderStyleLightStrokeWeight} ${borderColor} solid `
};

const bannerBase: CSSObject = {
  borderBottom: `${Border.BordersDdsBorderStyleLightStrokeWeight} ${borderColor} solid `,
  paddingRight: Spacing.SizesDdsSpacingLocalX1
};

const bannerLeftBase: CSSObject = {};

const navigationBase: CSSObject = {
  borderBottom: `${Border.BordersDdsBorderStyleLightStrokeWeight} ${borderColor} solid `
};

const navigationLinkBase: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX15}`,
  ...linkBase
};
const navigationLinkHoverBase: CSSObject = {
  ...linkHoverBase
};
const navigationLinkActiveBase: CSSObject = {
  ...linkActiveBase
};

const navigationLinkFocusBase: CSSObject = {
  ...focusVisibleLink
};

const navigationLinkCurrentBase: CSSObject = {
  color: Colors.DdsColorInteractiveDarker,
  backgroundColor: Colors.DdsColorPrimaryLightest
};

const contextGroupBase: CSSObject = {
  right: Spacing.SizesDdsSpacingLocalX075,
  top: Spacing.SizesDdsSpacingLocalX025
};

export const internalHeaderTokens = {
  wrapper: {
    base: wrapperBase
  },
  applicationNameWrapper: {
    base: applicationNameWrapperBase
  },
  lovisaWrapper: {
    base: lovisaWrapperBase
  },
  banner: {
    base: bannerBase,
    contextMenuSpacing: Spacing.SizesDdsSpacingLayoutX4
  },
  bannerLeft: {
    base: bannerLeftBase
  },
  navigation: {
    base: navigationBase
  },
  navigationLink: {
    base: navigationLinkBase,
    hover: {
      base: navigationLinkHoverBase
    },
    active: {
      base: navigationLinkActiveBase
    },
    focus: {
      base: navigationLinkFocusBase
    },
    current: {
      base: navigationLinkCurrentBase
    }
  },
  contextGroup: {
    base: contextGroupBase
  }
};
