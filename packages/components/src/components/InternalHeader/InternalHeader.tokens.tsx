import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { StaticTypographyType } from '../Typography';

const { border, colors, spacing } = ddsBaseTokens;

const borderStyle = `${border.BordersDdsBorderStyleLightStrokeWeight} ${border.BordersDdsBorderStyleLightStroke} solid `;

export const typographyTypes: Record<string, StaticTypographyType> = {
  navLink: 'bodySans01',
};

const navLink = {
  base: {
    color: colors.DdsColorNeutralsGray9,
    backgroundColor: colors.DdsColorNeutralsWhite,
    padding: `${spacing.SizesDdsSpacingX075} ${spacing.SizesDdsSpacingX15}`,
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
  padding: `${spacing.SizesDdsSpacingX1} ${spacing.SizesDdsSpacingX15}`,
};

const lovisaWrapper = {
  padding: `${spacing.SizesDdsSpacingX1} ${spacing.SizesDdsSpacingX15}`,
  borderRight: borderStyle,
};

const banner = {
  borderBottom: borderStyle,
  paddingRight: spacing.SizesDdsSpacingX1,
  hasContextMenu: {
    paddingRight: spacing.SizesDdsSpacingX4,
  },
};

const navigation = {
  borderBottom: borderStyle,
};

const contextGroup = {
  right: spacing.SizesDdsSpacingX075,
  top: spacing.SizesDdsSpacingX025,
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
