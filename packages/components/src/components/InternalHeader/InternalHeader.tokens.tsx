import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { border, colors, spacing } = ddsBaseTokens;

const bar = {
  backgroundColor: colors.DdsColorNeutralsWhite,
  itemGap: spacing.SizesDdsSpacingX15,
  minHeight: '57px',
  borderBottom: `${border.BordersDdsBorderStyleLightStroke} solid ${border.BordersDdsBorderStyleLightStrokeWeight}`,
  paddingLeft: spacing.SizesDdsSpacingX15,
  paddingRight: spacing.SizesDdsSpacingX15,
};

const separator = {
  color: border.BordersDdsBorderStyleLightStroke,
  width: border.BordersDdsBorderStyleLightStrokeWeight,
};

export const internalHeaderTokens = {
  bar,
  separator,
};
