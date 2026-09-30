import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base/Spacing.json';

import { TokenTable, underscoreToDash } from './functions';
import { type TokenBreakpointJsonObject } from './Tokens.types';

export const SpacingGenerator = () => {
  const tokenPrefix = 'dds-spacing';
  const tokens: TokenBreakpointJsonObject = jsonBase[tokenPrefix];
  const cssStyle = `.dds-spacing-preview {
                  background: var(--dds-color-surface-default);
                border: 1px solid var(--dds-color-border-default);
              }`;

  return (
    <TokenTable
      tokens={tokens}
      tokenPrefix={tokenPrefix}
      headers={['Token', 'Verdi', 'Eksempel', 'Kopier']}
      renderPreview={(_token, tokenName) => {
        const cssVariable = `var(${underscoreToDash(tokenName)})`;
        return (
          <div
            className="dds-spacing-preview"
            style={{ height: cssVariable, width: cssVariable }}
          />
        );
      }}
      styleElement={<style>{cssStyle}</style>}
    />
  );
};
