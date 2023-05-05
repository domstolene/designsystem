import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, border, spacing, iconSizes, borderRadius } = ddsBaseTokens;

const row = {
  body: {
    odd: {
      backgroundColor: colors.DdsColorNeutralsWhite,
    },
    even: {
      backgroundColor: colors.DdsColorNeutralsGray1,
    },
    hover: { backgroundColor: colors.DdsColorInteractiveLightest },
    selected: {
      backgroundColor: colors.DdsColorInteractiveLightest,
    },
    mode: {
      sum: {
        borderTop: `${border.BordersDdsBorderStyleLightStrokeWeight} solid ${colors.DdsColorNeutralsGray4}`,
        borderBottom: `${border.BordersDdsBorderStyleLightStrokeWeight} solid ${colors.DdsColorNeutralsGray4}`,
        backgroundColor: colors.DdsColorNeutralsWhite,
      },
    },
    withDividers: {
      borderBottom: `1px solid ${colors.DdsColorNeutralsGray4}`,
    },
  },
};

const cell = {
  density: {
    normal: {
      padding: `${spacing.SizesDdsSpacingLocalX15} ${spacing.SizesDdsSpacingLocalX075}`,
    },
    compact: {
      padding: `${spacing.SizesDdsSpacingLocalX075}`,
    },
    alternative: {
      padding: `${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX05}`,
    },
  },
  head: {
    backgroundColor: colors.DdsColorPrimaryLightest,
  },
  sort: {
    gap: spacing.SizesDdsSpacingLocalX05,
    icon: {
      marginInlineStart: spacing.SizesDdsSpacingLocalX05,
    },
  },
  layout: {
    textAndIcon: {
      gap: spacing.SizesDdsSpacingLocalX075,
      marginRight: spacing.SizesDdsSpacingLocalX075,
    },
  },
};

const collapseButton = {
  height: iconSizes.DdsIconsizeMedium,
  width: iconSizes.DdsIconsizeMedium,
  borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
};

export const tableTokens = {
  row,
  cell,
  collapseButton,
};
