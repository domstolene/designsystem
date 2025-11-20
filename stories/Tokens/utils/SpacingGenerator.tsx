import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base/Elsa.json';

import { copyButton } from './CopyButton';
import { underscoreToDash } from './functions';
import { type TokenBreakpointJsonObject } from './Tokens.types';
import { Table } from '../../../packages/dds-components/src/index';

export const SpacingGenerator = () => {
  const tokens: TokenBreakpointJsonObject = jsonBase['dds-spacing'];
  const cssStyle = `.dds-spacing-preview {
                  background: var(--dds-color-surface-default);
                border: 1px solid var(--dds-color-border-default);
              }`;

  function generateBodyRows() {
    const rows: Array<React.JSX.Element> = [];

    for (const key in tokens) {
      const token = tokens[key];
      const tokenName = `--dds-spacing-${key}`;
      const cssVariable = `var(${underscoreToDash(tokenName)})`;
      rows.push(
        <Table.Row key={tokenName}>
          <Table.Cell>{tokenName}</Table.Cell>
          <Table.Cell>{token.value}</Table.Cell>
          <Table.Cell>
            <div
              className="dds-spacing-preview"
              style={{
                height: cssVariable,
                width: cssVariable,
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
