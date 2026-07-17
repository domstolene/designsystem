import { type DdsThemeMain } from '#packages/dds-components/src/components/ThemeProvider/ThemeProvider';
import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base/Spacing.json';
import jsonHeightC from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Size/Height/Core.json';
import jsonHeightP from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Size/Height/Public.json';

import { copyButton } from './CopyButton';
import {
  type TokenBaseSizeJsonObject,
  type TokenSemanticHeightJsonObject,
} from './Tokens.types';
import { Table } from '../../../packages/dds-components/src/index';

export const SizeIconGenerator = () => {
  const tokenPrefix = 'dds-size-icon';
  const tokens: TokenBaseSizeJsonObject = jsonBase[tokenPrefix];
  const cssStyle = ` .dds-size-icon-preview {
                border: 1px solid var(--dds-color-border-default);
            }
                }`;

  function generateBodyRows() {
    const rows: Array<React.JSX.Element> = [];

    for (const key in tokens) {
      const token = tokens[key];
      const tokenName = `--${tokenPrefix}-${key}`;
      rows.push(
        <Table.Row key={tokenName}>
          <Table.Cell>{tokenName}</Table.Cell>
          <Table.Cell>{token.value}</Table.Cell>
          <Table.Cell>
            <div
              className="dds-size-icon-preview"
              style={{
                height: `var(${tokenName})`,
                width: `var(${tokenName})`,
              }}
            ></div>
          </Table.Cell>
          <Table.Cell>{copyButton(tokenName)}</Table.Cell>
        </Table.Row>,
      );
    }

    return rows;
  }

  return (
    <Table>
      <style>{cssStyle}</style>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Token</Table.Cell>
          <Table.Cell>Verdi</Table.Cell>
          <Table.Cell>Eksempel</Table.Cell>
          <Table.Cell>Kopier</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{generateBodyRows()}</Table.Body>
    </Table>
  );
};

export const SizeHeightGenerator = (theme: DdsThemeMain) => {
  const tokenPrefix = 'dds-size';
  const tokenSet = theme === 'core' ? jsonHeightC : jsonHeightP;
  const tokens: TokenSemanticHeightJsonObject = tokenSet[tokenPrefix]['height'];
  const cssStyle = ` .dds-size-height-preview {
                border: 1px solid var(--dds-color-border-default);
                max-width: 10rem;
            }
                }`;

  function generateBodyRows() {
    const rows: Array<React.JSX.Element> = [];

    for (const key1 in tokens) {
      for (const key2 in tokens[key1]) {
        const token = tokens[key1][key2];
        const tokenName = `--${tokenPrefix}-height-${key1}-${key2}`;
        rows.push(
          <Table.Row key={tokenName}>
            <Table.Cell>{tokenName}</Table.Cell>
            <Table.Cell>{token.value}</Table.Cell>
            <Table.Cell>
              <div
                className="dds-size-height-preview"
                style={{
                  height: `var(${tokenName})`,
                }}
              ></div>
            </Table.Cell>
            <Table.Cell>{copyButton(tokenName)}</Table.Cell>
            <Table.Cell>{token.description}</Table.Cell>
          </Table.Row>,
        );
      }
    }

    return rows;
  }

  return (
    <Table>
      <style>{cssStyle}</style>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Token</Table.Cell>
          <Table.Cell>Verdi</Table.Cell>
          <Table.Cell>Eksempel</Table.Cell>
          <Table.Cell>Kopier</Table.Cell>
          <Table.Cell>Beskrivelse</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{generateBodyRows()}</Table.Body>
    </Table>
  );
};
