import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing, font } = ddsBaseTokens;

const connector = {
  color: colors.DdsColorInteractiveBase,
};

const stepNumber = {
  active: {
    borderColor: colors.DdsColorInteractiveBase,
    color: colors.DdsColorNeutralsWhite,
    backgroundColor: colors.DdsColorInteractiveBase,
    hover: {
      borderColor: colors.DdsColorInteractiveBase,
      color: colors.DdsColorNeutralsWhite,
      backgroundColor: colors.DdsColorInteractiveBase,
    },
  },
  completed: {
    borderColor: colors.DdsColorInteractiveBase,
    color: colors.DdsColorNeutralsWhite,
    backgroundColor: colors.DdsColorInteractiveBase,
    hover: {
      borderColor: colors.DdsColorInteractiveDark,
      color: colors.DdsColorNeutralsWhite,
      backgroundColor: colors.DdsColorInteractiveDark,
    },
  },
  inactive: {
    borderColor: colors.DdsColorInteractiveBase,
    color: colors.DdsColorInteractiveBase,
    backgroundColor: colors.DdsColorNeutralsWhite,
    hover: {
      borderColor: colors.DdsColorInteractiveBase,
      color: colors.DdsColorInteractiveBase,
      backgroundColor: colors.DdsColorInteractiveLightest,
    },
  },
};

const stepButton = {
  marginTop: spacing.SizesDdsSpacingLayoutX1,
  fontFamily: font.DdsFontSupportingStyleLabel01FontFamily,
  fontSize: font.DdsFontSupportingStyleLabel01FontSize,

  active: {
    color: colors.DdsColorNeutralsGray9,
    textDecoration: 'none',
  },
  completed: {
    color: colors.DdsColorInteractiveBase,
    textDecoration: 'underline',
  },
  inactive: {
    color: colors.DdsColorInteractiveBase,
    textDecoration: 'underline',
  },
};

export const stepperTokens = {
  connector,
  stepNumber,
  stepButton,
};
