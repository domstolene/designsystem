import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { border, spacing, colors } = ddsBaseTokens;

const tabList = {
  borderBottom: `${border.BordersDdsBorderStyleLightStrokeWeight} solid ${border.BordersDdsBorderStyleLightStroke}`,
};
const tab = {
  base: {
    borderBottom: '2px solid transparent',
    color: colors.DdsColorNeutralsGray7,
    padding: spacing.SizesDdsSpacingX05,
    background: colors.DdsColorNeutralsWhite,
  },
  row: {
    gap: spacing.SizesDdsSpacingX05,
  },
  column: {
    gap: spacing.SizesDdsSpacingX025,
  },
  active: {
    backgroundColor: colors.DdsColorInteractiveLightest,
    color: colors.DdsColorInteractiveDarkest,
    borderColor: colors.DdsColorInteractiveDarker,
  },
  hover: {
    color: colors.DdsColorInteractiveDarkest,
    borderColor: colors.DdsColorInteractiveDarker,
  },
};

const panel = {
  padding: spacing.SizesDdsSpacingX025,
};

export const tabsTokens = {
  tabList,
  tab,
  panel,
};
