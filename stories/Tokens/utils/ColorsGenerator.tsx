import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base.json';
import jsonC from '@norges-domstoler/dds-design-tokens/dds/tokens/Core.json';

import { copyButton } from './CopyButton';
import { type TokenColorJsonObject } from './Tokens.types';
import {
  Table,
  VisuallyHidden,
} from '../../../packages/dds-components/src/index';

export const ColorsGenerator = () => {
  const tokens: TokenColorJsonObject = jsonC['dds-color'];
  const baseTokens: TokenColorJsonObject = jsonBase['dds-color-base'];
  const cssStyle = ` .dds-color-preview {
                height: var(--dds-spacing-x2);
                width: var(--dds-spacing-x2);
                border: 1px solid var(--dds-color-border-default);
            }`;

  function generateBodyRows() {
    const rows: Array<React.JSX.Element> = [];

    for (const key1 in tokens) {
      for (const key2 in tokens[key1]) {
        const token = tokens[key1][key2];
        let alpha = '';
        const splittedValue = token.value.split('}');
        if (splittedValue[1] !== undefined) {
          alpha = splittedValue[1];
        }
        const referenceKeys = splittedValue[0].split('.');
        const value = baseTokens[referenceKeys[1]][referenceKeys[2]].value;
        const tokenName = `--dds-color-${key1}-${key2}`;
        rows.push(
          <Table.Row key={tokenName}>
            <Table.Cell>{tokenName}</Table.Cell>
            <Table.Cell>
              {value}
              {alpha}
            </Table.Cell>
            <Table.Cell>
              <div
                className="dds-color-preview"
                style={{
                  background: `var(${tokenName})`,
                }}
              ></div>
            </Table.Cell>
            <Table.Cell>{copyButton(tokenName)}</Table.Cell>
            <Table.Cell>{token.description}</Table.Cell>
            <Table.Cell>{token.value}</Table.Cell>
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
          <Table.Cell>
            <VisuallyHidden as="span">Forhåndsvisning</VisuallyHidden>
          </Table.Cell>
          <Table.Cell>Kopier</Table.Cell>
          <Table.Cell>Beskrivelse</Table.Cell>
          <Table.Cell>Base-token</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{generateBodyRows()}</Table.Body>
    </Table>
  );
};
