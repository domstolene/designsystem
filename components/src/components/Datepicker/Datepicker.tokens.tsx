import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { iconSizes, spacing, border, colors, borderRadius } = ddsBaseTokens;

const calendarIndicator = {
  base: {
    sizes: {
      medium: {
        height: iconSizes.DdsIconsizeMedium,
        width: iconSizes.DdsIconsizeMedium,
        right: spacing.SizesDdsSpacingLocalX075,
      },
      small: {
        height: iconSizes.DdsIconsizeSmall,
        width: iconSizes.DdsIconsizeSmall,
        right: spacing.SizesDdsSpacingLocalX075,
      },
      tiny: {
        height: iconSizes.DdsIconsizeSmall,
        width: iconSizes.DdsIconsizeSmall,
        right: spacing.SizesDdsSpacingLocalX075,
      },
    },
  },
  focus: {
    outline: `${border.BordersDdsBorderFocusInputfieldStroke} solid ${border.BordersDdsBorderFocusInputfieldStrokeWeight}`,
    outlineOffset: spacing.SizesDdsSpacingLocalX0125,
  },
};

const calendarPopup = {
  base: {
    padding: spacing.SizesDdsSpacingLocalX1,
    gap: spacing.SizesDdsSpacingLocalX1,
    border: `2px solid ${colors.DdsColorInteractiveBase}`,
  },
  metaText: {
    color: colors.DdsColorNeutralsGray6,
  },
  month: {
    gap: spacing.SizesDdsSpacingLocalX075,
  },
  day: {
    borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
    padding: spacing.SizesDdsSpacingLocalX05,
    hover: {
      backgroundColor: colors.DdsColorNeutralsGray2,
    },
    selected: {
      backgroundColor: colors.DdsColorInteractiveBase,
      color: colors.DdsColorNeutralsWhite,
    },
    today: {
      boxShadow: ` 0 0 0 1px ${colors.DdsColorInteractiveBase}`,
    },
  },
};

export const datepickerTokens = {
  calendarIndicator,
  calendarPopup,
};
