import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { font, colors, border, spacing, iconSizes, borderRadius } =
  ddsBaseTokens;

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
  head: {
    extraCompact: {
      backgroundColor: colors.DdsColorNeutralsWhite,
      fontSize: font.DdsFontBodySans01FontSize,
    },
  },
};

const cell = {
  density: {
    normal: {
      padding: `${spacing.SizesDdsSpacingX15} ${spacing.SizesDdsSpacingX075}`,
    },
    compact: {
      padding: `${spacing.SizesDdsSpacingX075}`,
    },
    extraCompact: {
      padding: `${spacing.SizesDdsSpacingX025} ${spacing.SizesDdsSpacingX05}`,
    },
  },
  head: {
    backgroundColor: colors.DdsColorPrimaryLightest,
  },
  sort: {
    gap: spacing.SizesDdsSpacingX05,
    icon: {
      marginInlineStart: spacing.SizesDdsSpacingX05,
    },
  },
  layout: {
    textAndIcon: {
      gap: spacing.SizesDdsSpacingX075,
      marginRight: spacing.SizesDdsSpacingX075,
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
