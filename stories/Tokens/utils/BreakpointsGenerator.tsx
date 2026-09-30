import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base/Spacing.json';

import { TokenTable } from './functions';
import { type TokenBreakpointJsonObject } from './Tokens.types';

export const BreakpointsGenerator = () => {
  const tokenPrefix = 'dds-breakpoint';
  const tokens: TokenBreakpointJsonObject = jsonBase[tokenPrefix];

  return <TokenTable tokens={tokens} tokenPrefix={tokenPrefix} />;
};
