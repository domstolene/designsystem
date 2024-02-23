import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

import { type IconSize } from '../Icon';
import { type StaticTypographyType } from '../Typography';

const { colors, spacing } = ddsBaseTokens;

export const typographyTypes: {
  number: StaticTypographyType;
  label: StaticTypographyType;
} = {
  number: 'bodySans01',
  label: 'bodySans03',
};

const itemsWrapper = {
  gap: spacing.SizesDdsSpacingX0125,
};

const itemContentWrapper = {
  gap: spacing.SizesDdsSpacingX05,
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
  activeIncomplete: {
    borderColor: colors.DdsColorInteractiveBase,
    color: colors.DdsColorNeutralsWhite,
    backgroundColor: colors.DdsColorInteractiveBase,
    hover: {
      borderColor: colors.DdsColorInteractiveBase,
      color: colors.DdsColorNeutralsWhite,
      backgroundColor: colors.DdsColorInteractiveBase,
    },
  },
  activeCompleted: {
    borderColor: colors.DdsColorInteractiveBase,
    color: colors.DdsColorNeutralsWhite,
    backgroundColor: colors.DdsColorInteractiveBase,
    hover: {
      borderColor: colors.DdsColorInteractiveDark,
      color: colors.DdsColorNeutralsWhite,
      backgroundColor: colors.DdsColorInteractiveDark,
    },
  },
  inactiveCompleted: {
    borderColor: colors.DdsColorInteractiveBase,
    color: colors.DdsColorNeutralsWhite,
    backgroundColor: colors.DdsColorInteractiveBase,
    hover: {
      borderColor: colors.DdsColorInteractiveDark,
      color: colors.DdsColorNeutralsWhite,
      backgroundColor: colors.DdsColorInteractiveDark,
    },
  },
  inactiveIncomplete: {
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

  activeCompleted: {
    color: colors.DdsColorInteractiveBase,
    textDecorationColor: 'transparent',
    hover: {
      color: colors.DdsColorInteractiveBase,
      textDecorationColor: 'transparent',
    },
  },
  activeIncomplete: {
    color: colors.DdsColorInteractiveBase,
    textDecorationColor: 'transparent',
    hover: {
      color: colors.DdsColorInteractiveBase,
      textDecorationColor: 'transparent',
    },
  },
  inactiveIncomplete: {
    color: colors.DdsColorNeutralsGray7,
    textDecorationColor: colors.DdsColorNeutralsGray7,
    hover: {
      color: colors.DdsColorInteractiveBase,
      textDecorationColor: colors.DdsColorInteractiveBase,
    },
  },
  inactiveCompleted: {
    color: colors.DdsColorNeutralsGray7,
    textDecorationColor: colors.DdsColorNeutralsGray7,
    hover: {
      color: colors.DdsColorInteractiveBase,
      textDecorationColor: colors.DdsColorInteractiveBase,
    },
  },
  disabled: {
    color: colors.DdsColorNeutralsGray6,
    textDecorationColor: 'transparent',
  },
};

export const progressTrackerTokens = {
  itemsWrapper,
  itemContentWrapper,
  connector,
  itemNumber,
  itemText,
};
