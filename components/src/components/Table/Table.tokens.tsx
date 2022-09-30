import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';

const { colors, fontPackages, border, spacing } = ddsBaseTokens;

const { textDefault } = ddsReferenceTokens;

const row = {
  base: {
    color: textDefault.textColor,
    font: fontPackages.body_sans_02.base,
  },
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
        font: fontPackages.body_sans_02.base,
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

export const tableTokens = {
  row,
  cell,
};
