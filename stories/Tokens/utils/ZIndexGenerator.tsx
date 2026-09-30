import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base/Zindex.json';

import { TokenTable } from './functions';
import { type TokenBreakpointJsonObject } from './Tokens.types';

export const ZIndexGenerator = () => {
  const tokenPrefix = 'dds-zindex';
  const tokens: TokenBreakpointJsonObject = jsonBase[tokenPrefix];

  return (
    <TokenTable
      tokens={tokens}
      tokenPrefix={tokenPrefix}
      headers={['Token', 'Verdi', 'Kopier', 'Beskrivelse']}
      showDescription
      descriptionHeaderStyle={{ width: '26rem' }}
    />
  );
};
