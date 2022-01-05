import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  border: Border,
  borderRadius: BorderRadius,
  colors: Colors,
  spacing: Spacing,
  fontPackages: FontPackages
} = ddsBaseTokens;

const borderColor = Colors.DdsColorPrimaryLighter;

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
  borderRight: `${Border.BordersDdsBorderStyle1StrokeWeight} ${borderColor} solid `
};

const bannerBase: CSSObject = {
  borderBottom: `${Border.BordersDdsBorderStyle1StrokeWeight} ${borderColor} solid `,
  paddingRight: Spacing.SizesDdsSpacingLocalX1
};

const bannerLeftBase: CSSObject = {};

const navigationBase: CSSObject = {
  borderBottom: `${Border.BordersDdsBorderStyle1StrokeWeight} ${borderColor} solid `
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
  color: Colors.DdsColorNeutralsWhite,
  backgroundColor: Colors.DdsColorWarningDarkest
};

const navigationLinkCurrentBase: CSSObject = {
  color: Colors.DdsColorInteractiveDarker,
  backgroundColor: Colors.DdsColorPrimaryLightest
};

const contextMenuBase: CSSObject = {
  border: `${Border.BordersDdsBorderStyle1StrokeWeight} ${borderColor} solid `,
  backgroundColor: Colors.DdsColorNeutralsWhite,

  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius
};

const contextMenuLinkBase: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX15}`,
  ...linkBase
};
const contextMenuLinkHoverBase: CSSObject = {
  ...linkHoverBase
};
const contextMenuLinkActiveBase: CSSObject = {
  ...linkActiveBase
};
const contextMenuLinkFocusBase: CSSObject = {
  color: Colors.DdsColorNeutralsWhite,
  backgroundColor: Colors.DdsColorWarningDarkest
};
const iconBase: CSSObject = {
  marginRight: Spacing.SizesDdsSpacingLocalX025
};

const contextMenuDividerBase: CSSObject = {
  marginRight: Spacing.SizesDdsSpacingLocalX15,
  marginLeft: Spacing.SizesDdsSpacingLocalX15
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
    base: bannerBase
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
  contextMenu: {
    base: contextMenuBase,
    spaceFromButtonTop: Spacing.SizesDdsSpacingLocalX025
  },
  contextMenuLink: {
    base: contextMenuLinkBase,
    hover: {
      base: contextMenuLinkHoverBase
    },
    active: {
      base: contextMenuLinkActiveBase
    },
    focus: {
      base: contextMenuLinkFocusBase
    }
  },
  contextMenuDivider: {
    base: contextMenuDividerBase
  },
  icon: {
    base: iconBase
  }
};
