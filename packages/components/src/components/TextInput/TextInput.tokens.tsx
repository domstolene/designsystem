import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing, iconSizes } = ddsBaseTokens;

const input = {
  withIcon: {
    medium: {
      paddingLeft: `${
        spacing.SizesDdsSpacingX075NumberPx +
        iconSizes.DdsIconsizeMediumNumberPx +
        spacing.SizesDdsSpacingX05NumberPx
      }px`,
    },
    small: {
      paddingLeft: `${
        spacing.SizesDdsSpacingX075NumberPx +
        iconSizes.DdsIconsizeSmallNumberPx +
        spacing.SizesDdsSpacingX05NumberPx
      }px`,
    },
    tiny: {
      paddingLeft: `${
        spacing.SizesDdsSpacingX05NumberPx +
        iconSizes.DdsIconsizeSmallNumberPx +
        spacing.SizesDdsSpacingX025NumberPx
      }px`,
    },
  },
};

const affix = {
  border: {
    color: colors.DdsColorNeutralsGray5,
  },
};

const icon = {
  color: colors.DdsColorNeutralsGray9,
  sizes: {
    medium: {
      top: spacing.SizesDdsSpacingX075,
      left: spacing.SizesDdsSpacingX075,
    },
    small: {
      top: spacing.SizesDdsSpacingX075,
      left: spacing.SizesDdsSpacingX075,
    },
    tiny: {
      top: spacing.SizesDdsSpacingX05,
      left: spacing.SizesDdsSpacingX05,
    },
  },
};

export const textInputTokens = {
  input,
  icon,
  affix,
};
