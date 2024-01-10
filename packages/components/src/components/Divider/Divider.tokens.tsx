import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { border, spacing } = ddsBaseTokens;

const divider = {
  borderTop: `${border.BordersDdsBorderStyleLightStrokeWeight} solid`,
  marginTop: spacing.SizesDdsSpacingX1,
  marginBottom: spacing.SizesDdsSpacingX1,
  color: {
    primary: {
      borderColor: border.BordersDdsBorderStyleDarkStroke,
    },
    primaryLighter: {
      borderColor: border.BordersDdsBorderStyleLightStroke,
    },
  },
};

export const dividerTokens = {
  ...divider,
};
