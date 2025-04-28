import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base.json';
import jsonC from '@norges-domstoler/dds-design-tokens/dds/tokens/Core.json';

import { copyButton } from './CopyButton';
import { type TokenColorJsonObject } from './Tokens.types';
import {
  Heading,
  Table,
  Typography,
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

export const DataColorsGenerator = () => {
  const tokens: TokenColorJsonObject = jsonC['dds-color-data'];
  const baseTokens: TokenColorJsonObject = jsonBase['dds-color-data'];
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
        const tokenName = `--dds-color-data-${key1}-${key2}`;
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

export const DataColorsBaseGenerator = () => {
  const baseTokens: TokenColorJsonObject = jsonBase['dds-color-data'];
  const cssStyle = ` .dds-color-preview {
                height: 100px;
                width: 100px;

                }
                .dds-main-container {
                display: flex;
                flex-direction: column;
                gap: var(--dds-spacing-x6);
                text-transform: capitalize;
                }


                .dds-tokens-container {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: var(--dds-spacing-x1);
                max-width: 900px;
                }
                `;

  function generateBodyRows() {
    const categoryContainers: Array<React.JSX.Element> = [];

    for (const key1 in baseTokens) {
      const tokens: Array<React.JSX.Element> = [];

      for (const key2 in baseTokens[key1]) {
        const token = baseTokens[key1][key2];
        const tokenName = `${key2}`;
        tokens.push(
          <div>
            <div style={{ width: 'fit-content' }}>
              <div>
                <div
                  className="dds-color-preview"
                  style={{
                    background: `var(--dds-color-data-${key1}-${tokenName})`,
                  }}
                ></div>
                <Heading level={2} typographyType="headingXsmall">
                  {tokenName}
                </Heading>
                <Typography
                  as="span"
                  typographyType="bodySmall"
                  color="textMedium"
                >
                  {token.value}
                </Typography>
              </div>
            </div>
          </div>,
        );
      }
      categoryContainers.push(
        <div key={key1}>
          <Heading level={2} withMargins typographyType="headingMedium">
            {key1}
          </Heading>
          <div className="dds-tokens-container">{tokens}</div>
        </div>,
      );
    }

    return categoryContainers;
  }

  return (
    <div className="dds-main-container">
      <style>{cssStyle}</style>
      {generateBodyRows()}
    </div>
  );
};

export const ColorsBaseGenerator = () => {
  const baseTokens: TokenColorJsonObject = jsonBase['dds-color-base'];
  const cssStyle = ` .dds-color-preview {
                height: 100px;
                width: 100px;

                }
                .dds-main-container {
                display: flex;
                flex-direction: column;
                gap: var(--dds-spacing-x6);
                }
                .category-heading {
                  text-transform: capitalize;
                }

                .dds-tokens-container {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: var(--dds-spacing-x1);
                max-width: 900px;
                }
                `;

  function generateBodyRows() {
    const categoryContainers: Array<React.JSX.Element> = [];

    for (const key1 in baseTokens) {
      const tokens: Array<React.JSX.Element> = [];

      for (const key2 in baseTokens[key1]) {
        const token = baseTokens[key1][key2];
        const tokenName = `${key2}`;
        tokens.push(
          <div>
            <div style={{ width: 'fit-content' }}>
              <div>
                <div
                  className="dds-color-preview"
                  style={{
                    background: token.value,
                  }}
                ></div>
                <Heading level={2} typographyType="headingXsmall">
                  {tokenName}
                </Heading>
                <Typography
                  as="span"
                  typographyType="bodySmall"
                  color="textMedium"
                >
                  {token.value}
                </Typography>
              </div>
            </div>
          </div>,
        );
      }
      categoryContainers.push(
        <div key={key1}>
          <Heading
            level={2}
            withMargins
            typographyType="headingMedium"
            className="category-heading"
          >
            {key1}
          </Heading>
          <div className="dds-tokens-container">{tokens}</div>
        </div>,
      );
    }

    return categoryContainers;
  }

  return (
    <div className="dds-main-container">
      <style>{cssStyle}</style>
      {generateBodyRows()}
    </div>
  );
};
