import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { StaticTypographyType } from '../Typography';

const { colors, spacing, borderRadius } = ddsBaseTokens;

export const typographyType: StaticTypographyType = 'bodySans01';

const container = {
  gap: spacing.SizesDdsSpacingLocalX025,
  padding: `${spacing.SizesDdsSpacingLocalX0125} ${spacing.SizesDdsSpacingLocalX025}`,
  backgroundColor: colors.DdsColorNeutralsGray1,
  border: `1px solid ${colors.DdsColorNeutralsGray3}`,
  borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
};

const group = {
  gap: spacing.SizesDdsSpacingLocalX075,
};

export const chipTokens = {
  container,
  group,
};
