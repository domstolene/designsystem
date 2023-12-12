import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { StaticTypographyType } from '../Typography';
import { IconSize } from '../Icon';

const { colors, spacing } = ddsBaseTokens;

export const typographyTypes: {
  number: StaticTypographyType;
  label: StaticTypographyType;
} = {
  number: 'bodySans01',
  label: 'bodySans03',
};

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
  size: '1.75rem',
  borderWidth: '2px',
  iconSize: 'small' as IconSize,
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
  textDecoration: 'underline',

  active: {
    color: colors.DdsColorNeutralsGray9,
    textDecorationColor: colors.DdsColorNeutralsGray9,
  },
  inactive: {
    color: colors.DdsColorNeutralsGray7,
    textDecorationColor: 'transparent',
    hover: {
      textDecorationColor: colors.DdsColorNeutralsGray7,
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
