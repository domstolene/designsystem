import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { colors: Colors, border: Border, spacing: Spacing } = ddsBaseTokens;

export const dividerColors = {
  primary: Colors.DdsColorPrimaryBase,
  primaryLighter: Colors.DdsColorPrimaryLighter
};

const base: CSSObject = {
  border: 0,
  backgroundColor: 'transparent',
  borderTop: `${Border.BordersDdsBorderStyle1StrokeWeight} solid`,
  marginTop: Spacing.SizesDdsSpacingLocalX1,
  marginBottom: Spacing.SizesDdsSpacingLocalX1
};

export const dividerTokens = {
  base: base
};
