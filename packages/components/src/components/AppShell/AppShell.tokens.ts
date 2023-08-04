import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
const { colors, spacing, fontPackages, borderRadius, breakpoints } =
  ddsBaseTokens;

const navigationItems = {
  gap: spacing.SizesDdsSpacingLocalX05,
  item: {
    ...fontPackages.body_sans_02.base,
    color: colors.DdsColorNeutralsGray1,
    borderRadius: borderRadius.RadiiDdsBorderRadius3Radius,
    padding: spacing.SizesDdsSpacingLocalX075,
    gap: spacing.SizesDdsSpacingLocalX05,
    external: {
      ...fontPackages.body_sans_01.base,
    },
    hover: {
      backgroundColor: colors.DdsColorPrimaryDark,
    },
    active: {
      color: colors.DdsColorNeutralsWhite,
      backgroundColor: colors.DdsColorPrimaryDarker,
    },
  },
};

const logoAndVersion = {
  padding: '36px 24px',
  color: colors.DdsColorNeutralsWhite,
  logo: {
    ...fontPackages.heading_sans_05.base,
    fontWeight: 700,
    small: {
      ...fontPackages.heading_sans_03.base,
      fontWeight: 600,
    },
  },
  version: {
    ...fontPackages.supportingStyle_tiny_01.base,
  },
};

const topBar = {
  padding: spacing.SizesDdsSpacingLocalX025,
  height: `calc(${spacing.SizesDdsSpacingLayoutX3} + 2 * ${spacing.SizesDdsSpacingLocalX025})`,
  buttonTextColor: colors.DdsColorNeutralsGray3,
  gap: spacing.SizesDdsSpacingLocalX025,
};

const navigation = {
  navigationItems,
  logoAndVersion,
  topBar,

  color: colors.DdsColorNeutralsGray1,
  backgroundColor: colors.DdsColorPrimaryBase,
  gap: spacing.SizesDdsSpacingLocalX05,
  dividerColor: colors.DdsColorPrimaryLight,
  padding: spacing.SizesDdsSpacingLocalX1,
  width: '264px',

  mobile: {
    breakpoint: breakpoints.DdsBreakpointSm,
    iconColors: colors.DdsColorNeutralsGray3,
  },
};

const floatingActionButtons = {
  gap: spacing.SizesDdsSpacingLocalX1,
  textColor: colors.DdsColorNeutralsGray7,
  backgroundColor: colors.DdsColorNeutralsWhite,
  borderRadius: borderRadius.RadiiDdsBorderRadius3Radius,
};

export const appShellTokens = { navigation, floatingActionButtons };
