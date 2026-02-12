import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base/Elsa.json';
import jsonD from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Shadow/Dark.json';
import jsonL from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Shadow/Light.json';

import { copyButton } from './CopyButton';
import { splitReferenceKeys, tableStyle } from './functions';
import {
  type ThemeMode,
  type TokenColorJsonObject,
  type TokenShadowJsonObject,
  type TokenShadowSemanticJsonObject,
} from './Tokens.types';
import {
  Paper,
  Table,
  VisuallyHidden,
} from '../../../packages/dds-components/src/index';
import { hexToRGBValues } from '../../../packages/dds-components/src/utils';

const getShadowValue = (
  x: string,
  y: string,
  blur: string,
  spread: string,
  color: string,
) => `${x} ${y} ${blur} ${spread} ${color}`;

export const ShadowsGenerator = (theme: ThemeMode) => {
  const tokenSet = theme === 'light' ? jsonL : jsonD;
  const tokens: TokenShadowSemanticJsonObject = tokenSet['dds-shadow'];
  const baseTokens: TokenShadowJsonObject = jsonBase['dds-shadow-base'];
  const baseColorTokens: TokenColorJsonObject = jsonBase['dds-color-base'];

  function generateBodyRows() {
    const rows: Array<React.JSX.Element> = [];

    for (const key in tokens) {
      const token = tokens[key];
      const referenceKeys = splitReferenceKeys(token.value);
      const compositeValue = baseTokens[referenceKeys[1]].value;
      const tokenName = `--dds-shadow-${key}`;
      const splittedValue = compositeValue.color.split(/[{}]+/);
      const keys = splittedValue[1].split('.');

      const colorHexValue = baseColorTokens[keys[1]][keys[2]].value;
      const colorRgbaValue = `${splittedValue[0]}${hexToRGBValues(colorHexValue)}${splittedValue[2]}`;
      const value = getShadowValue(
        compositeValue.x,
        compositeValue.y,
        compositeValue.blur,
        compositeValue.spread,
        colorRgbaValue,
      );
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
                boxShadow: value,
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

export const ShadowsBaseGenerator = () => {
  const tokens: TokenShadowJsonObject = jsonBase['dds-shadow-base'];
  const baseColorTokens: TokenColorJsonObject = jsonBase['dds-color-base'];
  const cssStyle = `.dds-shadow-preview {
                  height: 2rem;
                  width: 2rem;
                  background: 1px solid var(--dds-color-surface-default);
                border: 1px solid var(--dds-color-border-default);
              }`;

  function generateBodyRows() {
    const rows: Array<React.JSX.Element> = [];
    for (const key in tokens) {
      const token = tokens[key];
      const tokenName = `--dds-shadow-${key}`;
      const splittedValue = token.value.color.split(/[{}]+/);
      const keys = splittedValue[1].split('.');

      const colorHexValue = baseColorTokens[keys[1]][keys[2]].value;
      const colorRgbaValue = `${splittedValue[0]}${hexToRGBValues(colorHexValue)}${splittedValue[2]}`;
      const value = getShadowValue(
        token.value.x,
        token.value.y,
        token.value.blur,
        token.value.spread,
        colorRgbaValue,
      );
      rows.push(
        <Table.Row key={tokenName}>
          <Table.Cell>{tokenName}</Table.Cell>
          <Table.Cell>{value}</Table.Cell>
          <Table.Cell>
            <div
              className="dds-shadow-preview"
              style={{
                boxShadow: `var(${tokenName})`,
              }}
            ></div>
          </Table.Cell>
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
          <Table.Cell>
            <VisuallyHidden>Forhåndsvisning</VisuallyHidden>
          </Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{generateBodyRows()}</Table.Body>
    </Table>
  );
};
