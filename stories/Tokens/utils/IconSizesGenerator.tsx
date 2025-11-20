import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base/Elsa.json';

import { copyButton } from './CopyButton';
import { type TokenBreakpointJsonObject } from './Tokens.types';
import { Table } from '../../../packages/dds-components/src/index';

export const IconSizesGenerator = () => {
  const tokens: TokenBreakpointJsonObject = jsonBase['dds-icon-size'];
  const cssStyle = ` .dds-icon-size-preview {
                border: 1px solid var(--dds-color-border-default);
            }
                }`;

  function generateBodyRows() {
    const rows: Array<React.JSX.Element> = [];

    for (const key in tokens) {
      const token = tokens[key];
      const tokenName = `--dds-icon-size-${key}`;
      rows.push(
        <Table.Row key={tokenName}>
          <Table.Cell>{tokenName}</Table.Cell>
          <Table.Cell>{token.value}</Table.Cell>
          <Table.Cell>
            <div
              className="dds-icon-size-preview"
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
