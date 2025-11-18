import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base/Elsa.json';
import jsonC from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/BorderRadius/Core.json';
import jsonP from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/BorderRadius/Public.json';

import { copyButton } from './CopyButton';
import { splitReferenceKeys, tableStyle } from './functions';
import {
  type ThemeMain,
  type TokenBorderRadiusJsonObject,
} from './Tokens.types';
import { Paper } from '../../../packages/dds-components/dist';
import { Table } from '../../../packages/dds-components/src/index';

export const BorderRadiusGenerator = (theme: ThemeMain) => {
  const tokenSet = theme === 'core' ? jsonC : jsonP;
  const tokens: TokenBorderRadiusJsonObject = tokenSet['dds-border-radius'];
  const baseTokens: TokenBorderRadiusJsonObject =
    jsonBase['dds-border-radius-base'];

  function generateBodyRows() {
    const rows: Array<React.JSX.Element> = [];

    for (const key in tokens) {
      const token = tokens[key];
      const referenceKeys = splitReferenceKeys(token.value);
      const value = baseTokens[referenceKeys[1]].value;
      const tokenName = `--dds-border-radius-${key}`;
      rows.push(
        <Table.Row key={tokenName}>
          <Table.Cell>{tokenName}</Table.Cell>
          <Table.Cell>{value}</Table.Cell>
          <Table.Cell>
            <Paper
              height="x2"
              width="x4"
              border="border-default"
              style={{
                borderRadius: value,
              }}
            ></Paper>
          </Table.Cell>
          <Table.Cell>{copyButton(tokenName)}</Table.Cell>
          <Table.Cell style={{ width: '20rem' }}>
            {token.description}
          </Table.Cell>
          <Table.Cell>{token.value}</Table.Cell>
        </Table.Row>,
      );
    }

    return rows;
  }

  return (
    <Table style={tableStyle}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Token</Table.Cell>
          <Table.Cell>Verdi</Table.Cell>
          <Table.Cell>Eksempel</Table.Cell>
          <Table.Cell>Kopier</Table.Cell>
          <Table.Cell>Beskrivelse</Table.Cell>
          <Table.Cell>Base-token</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{generateBodyRows()}</Table.Body>
    </Table>
  );
};

export const BorderRadiusBaseGenerator = () => {
  const tokens: TokenBorderRadiusJsonObject =
    jsonBase['dds-border-radius-base'];

  function generateBodyRows() {
    const rows: Array<React.JSX.Element> = [];

    for (const key in tokens) {
      const token = tokens[key];
      const tokenName = `--dds-border-radius-${key}`;
      rows.push(
        <Table.Row key={tokenName}>
          <Table.Cell>{tokenName}</Table.Cell>
          <Table.Cell>{token.value}</Table.Cell>
          <Table.Cell>
            <Paper
              height="x2"
              width="x4"
              border="border-default"
              style={{
                borderRadius: token.value,
              }}
            ></Paper>
          </Table.Cell>
          <Table.Cell>{copyButton(tokenName)}</Table.Cell>
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
          <Table.Cell>Eksempel</Table.Cell>
          <Table.Cell>Kopier</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{generateBodyRows()}</Table.Body>
    </Table>
  );
};
