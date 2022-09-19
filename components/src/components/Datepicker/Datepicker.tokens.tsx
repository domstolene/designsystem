import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { iconSizes, spacing, border } = ddsBaseTokens;

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

export const datepickerTokens = {
  calendarIndicator,
};
