import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
const { colors, spacing, fontPackages, borderRadius, breakpoints } =
  ddsBaseTokens;

const navigationItems = {
  gap: spacing.SizesDdsSpacingX05,
  item: {
    ...fontPackages.body_sans_02.base,
    color: colors.DdsColorNeutralsGray1,
    borderRadius: borderRadius.RadiiDdsBorderRadius3Radius,
    padding: spacing.SizesDdsSpacingX075,
    gap: spacing.SizesDdsSpacingX05,
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
  padding: spacing.SizesDdsSpacingX025,
  height: `calc(${spacing.SizesDdsSpacingX3} + 2 * ${spacing.SizesDdsSpacingX025})`,
  buttonTextColor: colors.DdsColorNeutralsGray3,
  gap: spacing.SizesDdsSpacingX025,
  marginTop: spacing.SizesDdsSpacingX025,
};

const navigation = {
  navigationItems,
  logoAndVersion,
  topBar,

  color: colors.DdsColorNeutralsGray1,
  backgroundColor: colors.DdsColorPrimaryBase,
  gap: spacing.SizesDdsSpacingX05,
  dividerColor: colors.DdsColorPrimaryLight,
  padding: spacing.SizesDdsSpacingX1,
  width: '264px',

  mobile: {
    breakpoint: breakpoints.DdsBreakpointSm,
    iconColors: colors.DdsColorNeutralsGray3,
  },
};

const floatingActionButtons = {
  gap: spacing.SizesDdsSpacingX1,
  textColor: colors.DdsColorNeutralsGray7,
  backgroundColor: colors.DdsColorNeutralsWhite,
  borderRadius: borderRadius.RadiiDdsBorderRadius3Radius,
};

export const appShellTokens = { navigation, floatingActionButtons };
