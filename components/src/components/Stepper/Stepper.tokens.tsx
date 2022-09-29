import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing, font } = ddsBaseTokens;

const stepsWrapper = {
  gap: spacing.SizesDdsSpacingLocalX0125,
};

const stepContentWrapper = {
  gap: spacing.SizesDdsSpacingLocalX05,
};

const connector = {
  color: colors.DdsColorNeutralsGray5,
  height: spacing.SizesDdsSpacingLocalX05,
  width: '1px',
};

const stepNumber = {
  size: '30px',
  borderWidth: '2px',
  fontSize: font.DdsFontBodySans02FontSize,
  active: {
    borderColor: colors.DdsColorInteractiveBase,
    color: colors.DdsColorNeutralsWhite,
    backgroundColor: colors.DdsColorInteractiveBase,
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
  disabled: {
    borderColor: colors.DdsColorNeutralsGray5,
    color: colors.DdsColorNeutralsGray5,
    backgroundColor: colors.DdsColorNeutralsWhite,
  },
};

const stepText = {
  fontFamily: font.DdsFontSupportingStyleLabel01FontFamily,
  fontSize: font.DdsFontSupportingStyleLabel01FontSize,

  active: {
    color: colors.DdsColorNeutralsGray9,
    textDecoration: 'underline',
  },
  inactive: {
    color: colors.DdsColorNeutralsGray7,
    textDecoration: 'none',
    hover: {
      textDecoration: 'underline',
    },
  },
  disabled: {
    color: colors.DdsColorNeutralsGray6,
    textDecoration: 'none',
  },
};

export const stepperTokens = {
  stepsWrapper,
  stepContentWrapper,
  connector,
  stepNumber,
  stepText,
};
