import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing, iconSizes } = ddsBaseTokens;

const input = {
  withIcon: {
    medium: {
      paddingLeft: `${
        spacing.SizesDdsSpacingLocalX075NumberPx +
        iconSizes.DdsIconsizeMediumNumberPx +
        spacing.SizesDdsSpacingLocalX05NumberPx
      }px`,
    },
    small: {
      paddingLeft: `${
        spacing.SizesDdsSpacingLocalX075NumberPx +
        iconSizes.DdsIconsizeSmallNumberPx +
        spacing.SizesDdsSpacingLocalX05NumberPx
      }px`,
    },
    tiny: {
      paddingLeft: `${
        spacing.SizesDdsSpacingLocalX05NumberPx +
        iconSizes.DdsIconsizeSmallNumberPx +
        spacing.SizesDdsSpacingLocalX025NumberPx
      }px`,
    },
  },
};

const icon = {
  color: colors.DdsColorNeutralsGray9,
  sizes: {
    medium: {
      top: spacing.SizesDdsSpacingLocalX075,
      left: spacing.SizesDdsSpacingLocalX075,
    },
    small: {
      top: spacing.SizesDdsSpacingLocalX075,
      left: spacing.SizesDdsSpacingLocalX075,
    },
    tiny: {
      top: spacing.SizesDdsSpacingLocalX05,
      left: spacing.SizesDdsSpacingLocalX05,
    },
  },
};

export const textInputTokens = {
  input,
  icon,
};
