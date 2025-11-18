import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base/Elsa.json';

import { copyButton } from './CopyButton';
import { type TokenBreakpointJsonObject } from './Tokens.types';
import { Table } from '../../../packages/dds-components/src/index';

export const ZIndexGenerator = () => {
  const tokens: TokenBreakpointJsonObject = jsonBase['dds-zindex'];

  function generateBodyRows() {
    const rows: Array<React.JSX.Element> = [];

    for (const key in tokens) {
      const token = tokens[key];
      const tokenName = `--dds-zindex-${key}`;
      rows.push(
        <Table.Row key={tokenName}>
          <Table.Cell>{tokenName}</Table.Cell>
          <Table.Cell>{token.value}</Table.Cell>
          <Table.Cell>{copyButton(tokenName)}</Table.Cell>
          <Table.Cell>{token.description}</Table.Cell>
        </Table.Row>,
      );
    }

    return rows;
  }

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Token</Table.Cell>
          <Table.Cell>Verdi</Table.Cell>
          <Table.Cell>Kopier</Table.Cell>
          <Table.Cell style={{ width: '26rem' }}>Beskrivelse</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{generateBodyRows()}</Table.Body>
    </Table>
  );
};
