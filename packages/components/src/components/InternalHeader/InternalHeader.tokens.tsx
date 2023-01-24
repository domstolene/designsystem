import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { StaticTypographyType } from '../Typography';

const { border, colors, spacing } = ddsBaseTokens;

const borderStyle = `${border.BordersDdsBorderStyleLightStrokeWeight} ${border.BordersDdsBorderStyleLightStroke} solid `;

export const typographyTypes: { [k: string]: StaticTypographyType } = {
  navLink: 'bodySans01',
};

const navLink = {
  base: {
    color: colors.DdsColorNeutralsGray9,
    backgroundColor: colors.DdsColorNeutralsWhite,
    padding: `${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX15}`,
  },
  hover: {
    color: colors.DdsColorInteractiveDark,
  },
  active: {
    color: colors.DdsColorInteractiveDark,
  },
  current: {
    color: colors.DdsColorInteractiveDarkest,
    backgroundColor: colors.DdsColorPrimaryLightest,
  },
};

const outerContainer = {
  backgroundColor: colors.DdsColorNeutralsWhite,
};

const applicationNameWrapper = {
  padding: `${spacing.SizesDdsSpacingLocalX1} ${spacing.SizesDdsSpacingLocalX15}`,
};

const lovisaWrapper = {
  padding: `${spacing.SizesDdsSpacingLocalX1} ${spacing.SizesDdsSpacingLocalX15}`,
  borderRight: borderStyle,
};

const banner = {
  borderBottom: borderStyle,
  paddingRight: spacing.SizesDdsSpacingLocalX1,
  hasContextMenu: {
    paddingRight: spacing.SizesDdsSpacingLayoutX4,
  },
};

const navigation = {
  borderBottom: borderStyle,
};

const contextGroup = {
  right: spacing.SizesDdsSpacingLocalX075,
  top: spacing.SizesDdsSpacingLocalX025,
};

export const internalHeaderTokens = {
  navLink,
  outerContainer,
  applicationNameWrapper,
  lovisaWrapper,
  banner,
  navigation,
  contextGroup,
};
