import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { spacing: Spacing } = ddsBaseTokens;

const charCounterBase: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX025} ${Spacing.SizesDdsSpacingLocalX05}`
};

export const charCounterTokens = {
  base: charCounterBase
};
