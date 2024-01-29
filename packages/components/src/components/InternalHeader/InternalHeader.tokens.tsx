import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { border, colors, spacing } = ddsBaseTokens;

const bar = {
  backgroundColor: colors.DdsColorNeutralsWhite,
  itemGap: spacing.SizesDdsSpacingX1,
  minHeight: '57px',
  borderBottom: `${border.BordersDdsBorderStyleLightStroke} solid ${border.BordersDdsBorderStyleLightStrokeWeight}`,
};

const separator = {
  color: border.BordersDdsBorderStyleLightStroke,
  width: border.BordersDdsBorderStyleLightStrokeWeight,
};

export const internalHeaderTokens = {
  bar,
  separator,
};
