import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  colors: Colors,
  spacing: Spacing,
  fontPackages: FontPackages,
  borderRadius: BorderRadius
} = ddsBaseTokens;

const charCounterBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray6,
  padding: `${Spacing.SizesDdsSpacingLocalX025} ${Spacing.SizesDdsSpacingLocalX05}`
};

export const charCounterTokens = {
  base: charCounterBase,
  font: FontPackages.sansRegularx0_875.base
};
