import { type DdsThemeMain } from '#packages/dds-components/src/components/ThemeProvider/ThemeProvider';
import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base/Spacing.json';
import jsonHeightC from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Size/Height/Core.json';
import jsonHeightP from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Size/Height/Public.json';

import { TokenTable } from './functions';
import {
  type TokenBaseSizeJsonObject,
  type TokenSemanticHeightJsonObject,
} from './Tokens.types';

export const SizeIconGenerator = () => {
  const tokenPrefix = 'dds-size-icon';
  const tokens: TokenBaseSizeJsonObject = jsonBase[tokenPrefix];
  const cssStyle = ` .dds-size-icon-preview {
                border: 1px solid var(--dds-color-border-default);
            }
                }`;

  return (
    <TokenTable
      tokens={tokens}
      tokenPrefix={tokenPrefix}
      headers={['Token', 'Verdi', 'Eksempel', 'Kopier']}
      renderPreview={(_token, tokenName) => (
        <div
          className="dds-size-icon-preview"
          style={{ height: `var(${tokenName})`, width: `var(${tokenName})` }}
        />
      )}
      styleElement={<style>{cssStyle}</style>}
    />
  );
};

export const SizeHeightGenerator = (theme: DdsThemeMain) => {
  const tokenPrefix = 'dds-size';
  const tokenSet = theme === 'core' ? jsonHeightC : jsonHeightP;
  const tokens: TokenSemanticHeightJsonObject = tokenSet[tokenPrefix]['height'];
  const flatTokens = Object.fromEntries(
    Object.entries(tokens).flatMap(([key1, group]) =>
      Object.entries(group).map(([key2, token]) => [`${key1}-${key2}`, token]),
    ),
  );
  const cssStyle = ` .dds-size-height-preview {
                border: 1px solid var(--dds-color-border-default);
                max-width: 10rem;
            }
                }`;

  return (
    <TokenTable
      tokens={flatTokens}
      tokenPrefix={`${tokenPrefix}-height`}
      headers={['Token', 'Verdi', 'Eksempel', 'Kopier', 'Beskrivelse']}
      renderPreview={(_token, tokenName) => (
        <div
          className="dds-size-height-preview"
          style={{ height: `var(${tokenName})` }}
        />
      )}
      showDescription
      styleElement={<style>{cssStyle}</style>}
    />
  );
};
