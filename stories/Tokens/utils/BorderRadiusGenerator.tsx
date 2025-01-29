import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base.json';
import jsonC from '@norges-domstoler/dds-design-tokens/dds/tokens/Core.json';
import jsonP from '@norges-domstoler/dds-design-tokens/dds/tokens/Public.json';

import { copyButton } from './CopyButton';
import { splitReferenceKeys, tableStyle } from './functions';
import { type TokenBorderRadiusJsonObject } from './Tokens.types';
import {
  type DdsTheme,
  Table,
} from '../../../packages/dds-components/src/index';

export const BorderRadiusGenerator = (theme: DdsTheme) => {
  const tokenSet = theme === 'core' ? jsonC : jsonP;
  const tokens: TokenBorderRadiusJsonObject = tokenSet['dds-border-radius'];
  const baseTokens: TokenBorderRadiusJsonObject =
    jsonBase['dds-border-radius-base'];
  const cssStyle = ` .dds-border-radius-preview {
                height: 2rem;
                width: 4rem;
                border: 1px solid var(--dds-color-border-default);
            }`;

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
            <div
              className="dds-border-radius-preview"
              style={{
                borderRadius: `var(${tokenName})`,
              }}
            ></div>
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
      <style>{cssStyle}</style>
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
