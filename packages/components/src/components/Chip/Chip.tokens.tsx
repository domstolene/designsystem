import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

import { type StaticTypographyType } from '../Typography';

const { colors, spacing, borderRadius } = ddsBaseTokens;

export const typographyType: StaticTypographyType = 'bodySans01';

const container = {
  gap: spacing.SizesDdsSpacingX025,
  padding: [
    spacing.SizesDdsSpacingX0125,
    spacing.SizesDdsSpacingX025,
    spacing.SizesDdsSpacingX0125,
    spacing.SizesDdsSpacingX05,
  ].join(' '),
  backgroundColor: colors.DdsColorNeutralsGray1,
  border: `1px solid ${colors.DdsColorNeutralsGray3}`,
  borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
};

const group = {
  gap: spacing.SizesDdsSpacingX075,
};

export const chipTokens = {
  container,
  group,
};
