import { type DdsThemeMain } from '#packages/dds-components/src/components/ThemeProvider/ThemeProvider';
import jsonHeightC from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Size/Height/Core.json';
import jsonHeightP from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Size/Height/Public.json';

import { TokenTable } from './functions';
import { type TokenSizeSemanticJsonObject } from './Tokens.types';

export const SizeGenerator = (theme: DdsThemeMain) => {
  const tokenPrefix = 'dds-size';
  const tokenSet = theme === 'core' ? jsonHeightC : jsonHeightP;
  const tokens: TokenSizeSemanticJsonObject = tokenSet[tokenPrefix];

  const cssStyle = ` .dds-size-height-preview {
                border: 1px solid var(--dds-color-border-default);
            }
                }`;

  return (
    <TokenTable
      tokens={tokens}
      tokenPrefix={tokenPrefix}
      headers={['Token', 'Verdi', 'Eksempel', 'Kopier', 'Beskrivelse']}
      renderPreview={(_token, tokenName) => (
        <div
          className="dds-size-height-preview"
          style={{ height: `var(${tokenName})`, width: `var(${tokenName})` }}
        />
      )}
      showDescription
      styleElement={<style>{cssStyle}</style>}
    />
  );
};
