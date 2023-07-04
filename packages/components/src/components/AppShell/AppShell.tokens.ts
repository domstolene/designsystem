import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
const { colors, spacing, fontPackages, borderRadius } = ddsBaseTokens;

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
  },
  version: {
    ...fontPackages.supportingStyle_tiny_01.base,
  },
};

const navigation = {
  navigationItems,
  logoAndVersion,

  color: colors.DdsColorNeutralsGray1,
  backgroundColor: colors.DdsColorPrimaryBase,
  gap: spacing.SizesDdsSpacingLocalX05,
  dividerColor: colors.DdsColorPrimaryLight,
  padding: spacing.SizesDdsSpacingLocalX1,
  width: '264px',

  mobile: {
    iconColors: colors.DdsColorNeutralsGray3,
  },
};

const floatingActionButtons = {
  gap: spacing.SizesDdsSpacingLocalX1,
  textColor: colors.DdsColorNeutralsGray7,
  backgroundColor: colors.DdsColorPrimaryDarker,
};

export const appShellTokens = { navigation, floatingActionButtons };
