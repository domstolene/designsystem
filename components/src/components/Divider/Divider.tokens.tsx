import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { border: Border, spacing: Spacing } = ddsBaseTokens;

export const dividerColors = {
  primary: Border.BordersDdsBorderStyleDarkStroke,
  primaryLighter: Border.BordersDdsBorderStyleLightStroke
};

const base: CSSObject = {
  border: 0,
  backgroundColor: 'transparent',
  borderTop: `${Border.BordersDdsBorderStyleLightStrokeWeight} solid`,
  marginTop: Spacing.SizesDdsSpacingLocalX1,
  marginBottom: Spacing.SizesDdsSpacingLocalX1
};

export const dividerTokens = {
  base: base
};
