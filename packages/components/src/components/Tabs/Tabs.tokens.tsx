import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { border, spacing, colors } = ddsBaseTokens;

const tabList = {
  borderBottom: `${border.BordersDdsBorderStyleLightStrokeWeight} solid ${border.BordersDdsBorderStyleLightStroke}`,
};
const tab = {
  base: {
    borderBottom: `${border.BordersDdsBorderStyleLightStrokeWeight} solid transparent`,
    color: colors.DdsColorNeutralsGray7,
    padding: spacing.SizesDdsSpacingLocalX05,
  },
  row: {
    gap: spacing.SizesDdsSpacingLocalX05,
  },
  column: {
    gap: spacing.SizesDdsSpacingLocalX025,
  },
  active: {
    backgroundColor: colors.DdsColorInteractiveLightest,
    color: colors.DdsColorInteractiveDarkest,
    boxShadow: `inset 0 -2px 0 0 ${colors.DdsColorInteractiveDarker}`,
    borderColor: colors.DdsColorInteractiveDarker,
  },
  hover: {
    color: colors.DdsColorInteractiveDarkest,
    boxShadow: `inset 0 -2px 0 0 ${colors.DdsColorInteractiveDarker}`,
    borderColor: colors.DdsColorInteractiveDarker,
  },
};

const panel = {
  padding: spacing.SizesDdsSpacingLocalX025,
};

export const tabsTokens = {
  tabList,
  tab,
  panel,
};
