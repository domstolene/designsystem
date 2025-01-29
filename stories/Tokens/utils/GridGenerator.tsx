import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base.json';

import { copyButton } from './CopyButton';
import { type TokenGridJsonObject } from './Tokens.types';
import {
  Table,
  VisuallyHidden,
} from '../../../packages/dds-components/src/index';

export const GridGenerator = () => {
  const tokens: TokenGridJsonObject = jsonBase['dds-grid'];
  const cssStyle = ` .dds-grid-preview {
                border: 1px solid var(--dds-color-border-default);
            }
                .dds-columns {
                display: grid;
                }
                .dds-column {
                height: 3rem;
                }`;

  function renderColumns(count: number): Array<React.JSX.Element> {
    const columns = [];
    for (let index = 0; index < count; index++) {
      columns.push(
        <div key={index} className="dds-grid-preview dds-column"></div>,
      );
    }
    return columns;
  }

  function generateBodyRows() {
    const rows: Array<React.JSX.Element> = [];

    for (const key1 in tokens) {
      for (const key2 in tokens[key1]) {
        const token = tokens[key1][key2];
        const tokenName = `--dds-grid-${key1}-${key2}`;
        rows.push(
          <Table.Row key={tokenName}>
            <Table.Cell>{tokenName}</Table.Cell>
            <Table.Cell>{token.value}</Table.Cell>
            <Table.Cell>
              {token.type === 'dimension' ? (
                <div
                  className="dds-grid-preview"
                  style={{
                    width: `var(${tokenName})`,
                    height: `var(${tokenName})`,
                  }}
                ></div>
              ) : token.type === 'number' ? (
                <div
                  className="dds-columns"
                  style={{
                    gridTemplateColumns: `repeat(var(${tokenName}), minmax(0, 1fr))`,
                    columnGap: `var(--dds-grid-${key1}-gutter-size)`,
                  }}
                >
                  {renderColumns(Number(token.value))}
                </div>
              ) : null}
            </Table.Cell>
            <Table.Cell>{copyButton(tokenName)}</Table.Cell>
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
          <Table.Cell style={{ width: '30rem' }}>Eksempel</Table.Cell>
          <Table.Cell>Kopier</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{generateBodyRows()}</Table.Body>
    </Table>
  );
};
