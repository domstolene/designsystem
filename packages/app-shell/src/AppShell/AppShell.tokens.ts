import { ddsBaseTokens, ddsTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing, fontPackages, breakpoints } = ddsBaseTokens;

const navigationItems = {
  gap: spacing.DdsSpacingX05,
  item: {
    ...fontPackages.body_sans_02.base,
    color: colors.DdsColorNeutralsGray1,
    borderRadius: ddsTokens.DdsBorderRadius3,
    padding: spacing.DdsSpacingX075,
    gap: spacing.DdsSpacingX05,
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
  padding: spacing.DdsSpacingX025,
  height: `calc(${spacing.DdsSpacingX3} + 2 * ${spacing.DdsSpacingX025})`,
  buttonTextColor: colors.DdsColorNeutralsGray3,
  gap: spacing.DdsSpacingX025,
  marginTop: spacing.DdsSpacingX025,
};

const navigation = {
  navigationItems,
  logoAndVersion,
  topBar,

  color: colors.DdsColorNeutralsGray1,
  backgroundColor: colors.DdsColorPrimaryBase,
  gap: spacing.DdsSpacingX05,
  dividerColor: colors.DdsColorPrimaryLight,
  padding: spacing.DdsSpacingX1,
  width: '264px',

  mobile: {
    breakpoint: breakpoints.DdsBreakpointSm,
    iconColors: colors.DdsColorNeutralsGray3,
  },
};

const floatingActionButtons = {
  gap: spacing.DdsSpacingX1,
  textColor: colors.DdsColorNeutralsGray7,
  backgroundColor: colors.DdsColorNeutralsWhite,
  borderRadius: ddsTokens.DdsBorderRadius3,
};

export const appShellTokens = { navigation, floatingActionButtons };
