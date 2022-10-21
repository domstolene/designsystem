import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { border, spacing, colors } = ddsBaseTokens;

const tabList = {
  borderBottom: `${border.BordersDdsBorderStyleLightStrokeWeight} solid ${border.BordersDdsBorderStyleLightStroke}`,
};
const tab = {
  base: {
    borderBottom: `${border.BordersDdsBorderStyleLightStrokeWeight} solid transparent`,
    color: colors.DdsColorNeutralsGray7,
  },
  row: {
    padding: `${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX05}`,
    gap: spacing.SizesDdsSpacingLocalX05,
  },
  column: {
    padding: `${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX025}`,
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
