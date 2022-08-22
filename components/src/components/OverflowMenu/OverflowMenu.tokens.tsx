import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { focusVisibleLink } from '../../helpers/styling';

const {
  border: Border,
  borderRadius: BorderRadius,
  colors: Colors,
  spacing: Spacing,
  fontPackages: FontPackages,
} = ddsBaseTokens;

const linkBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray9,
  textDecoration: 'none',
  backgroundColor: Colors.DdsColorNeutralsWhite,
  padding: `${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX15}`,
  gap: Spacing.SizesDdsSpacingLocalX025,
  ...FontPackages.body_sans_01.base,
};

const linkHoverBase: CSSObject = {
  color: Colors.DdsColorInteractiveDark,
  backgroundColor: Colors.DdsColorPrimaryLightest,
};

const linkActiveBase: CSSObject = {
  color: Colors.DdsColorInteractiveBase,
};

const wrapperBase: CSSObject = {
  border: `${Border.BordersDdsBorderStyleLightStrokeWeight} ${Border.BordersDdsBorderStyleLightStroke} solid `,
  backgroundColor: Colors.DdsColorNeutralsWhite,

  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
};

const linkFocusBase: CSSObject = {
  ...focusVisibleLink,
};

const dividerBase: CSSObject = {
  marginRight: Spacing.SizesDdsSpacingLocalX15,
  marginLeft: Spacing.SizesDdsSpacingLocalX15,
};

export const overflowMenuTokens = {
  container: {
    base: wrapperBase,
  },
  link: {
    base: linkBase,
    active: {
      base: linkActiveBase,
    },
    hover: {
      base: linkHoverBase,
    },
    focus: {
      base: linkFocusBase,
    },
  },
  divider: {
    base: dividerBase,
  },
  offset: Spacing.SizesDdsSpacingLocalX0125NumberPx,
};
