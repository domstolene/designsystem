import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { IconSize } from '../Icon';

const { colors, spacing, font } = ddsBaseTokens;

const itemsWrapper = {
  gap: spacing.SizesDdsSpacingLocalX0125,
};

const itemContentWrapper = {
  gap: spacing.SizesDdsSpacingLocalX05,
};

const connector = {
  color: colors.DdsColorNeutralsGray5,
  height: '18px',
  width: '1px',
};

const itemNumber = {
  size: '28px',
  borderWidth: '2px',
  iconSize: 'small' as IconSize,
  fontSize: font.DdsFontBodySans01FontSize,
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

const itemText = {
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

export const progressTrackerTokens = {
  itemsWrapper,
  itemContentWrapper,
  connector,
  itemNumber,
  itemText,
};
