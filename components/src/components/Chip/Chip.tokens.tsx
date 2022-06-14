import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { colors, spacing, borderRadius, fontPackages } = ddsBaseTokens;

const containerBase: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  gap: spacing.SizesDdsSpacingLocalX025,
  padding: `${spacing.SizesDdsSpacingLocalX0125} ${spacing.SizesDdsSpacingLocalX025}`,
  backgroundColor: colors.DdsColorNeutralsGray1,
  border: `1px solid ${colors.DdsColorNeutralsGray3}`,
  borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
  color: colors.DdsColorNeutralsGray9,
  ...fontPackages.body_sans_01.base
};

const groupBase: CSSObject = {
  display: 'flex',
  gap: spacing.SizesDdsSpacingLocalX025
};

export const chipTokens = {
  container: {
    base: containerBase
  },
  group: {
    base: groupBase
  }
};
