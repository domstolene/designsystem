import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base.json';
import jsonC from '@norges-domstoler/dds-design-tokens/dds/tokens/Core.json';

import { copyButton } from './CopyButton';
import { type TokenColorJsonObject } from './Tokens.types';
import {
  Box,
  HStack,
  Heading,
  Paper,
  StylelessList,
  Table,
  Typography,
  VStack,
  VisuallyHidden,
} from '../../../packages/dds-components/src/index';

export const ColorsGenerator = () => {
  const tokens: TokenColorJsonObject = jsonC['dds-color'];
  const baseTokens: TokenColorJsonObject = jsonBase['dds-color-base'];

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
              <Paper
                height="var(--dds-spacing-x2"
                width="var(--dds-spacing-x2"
                border="border-default"
                style={{
                  background: `var(${tokenName})`,
                }}
              ></Paper>
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
              <Paper
                height="var(--dds-spacing-x2"
                width="var(--dds-spacing-x2"
                border="border-default"
                style={{
                  background: `var(${tokenName})`,
                }}
              ></Paper>
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
  const cssStyle = `
                .dds-main-container {
                text-transform: capitalize;
                }
                `;

  function generateCards() {
    const categoryContainers: Array<React.JSX.Element> = [];

    for (const key1 in baseTokens) {
      const tokens: Array<React.JSX.Element> = [];

      for (const key2 in baseTokens[key1]) {
        const token = baseTokens[key1][key2];
        const tokenName = `${key2}`;
        tokens.push(
          <VStack as="li" gap="x0.25">
            <Box
              height="100px"
              width="100px"
              style={{
                background: `var(--dds-color-data-${key1}-${tokenName})`,
              }}
            />
            <Heading level={2} typographyType="headingXsmall">
              {tokenName}
            </Heading>
            <Typography as="span" typographyType="bodySmall" color="textMedium">
              {token.value}
            </Typography>
          </VStack>,
        );
      }
      categoryContainers.push(
        <div key={key1}>
          <Heading level={2} withMargins typographyType="headingMedium">
            {key1}
          </Heading>
          <HStack as={StylelessList} gap="x1" maxWidth="900px" flexWrap="wrap">
            {tokens}
          </HStack>
        </div>,
      );
    }

    return categoryContainers;
  }

  return (
    <VStack className="dds-main-container" gap="x6">
      <style>{cssStyle}</style>
      {generateCards()}
    </VStack>
  );
};

export const ColorsBaseGenerator = () => {
  const baseTokens: TokenColorJsonObject = jsonBase['dds-color-base'];
  const cssStyle = `
                .category-heading {
                  text-transform: capitalize;
                }
                `;

  function generateCards() {
    const categoryContainers: Array<React.JSX.Element> = [];

    for (const key1 in baseTokens) {
      const tokens: Array<React.JSX.Element> = [];

      for (const key2 in baseTokens[key1]) {
        const token = baseTokens[key1][key2];
        const tokenName = `${key2}`;
        tokens.push(
          <VStack gap="x0.25" as="li">
            <Box
              width="100px"
              height="100px"
              style={{
                background: token.value,
              }}
            />
            <Heading level={2} typographyType="headingXsmall">
              {tokenName}
            </Heading>
            <Typography as="span" typographyType="bodySmall" color="textMedium">
              {token.value}
            </Typography>
          </VStack>,
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
          <HStack as={StylelessList} flexWrap="wrap" gap="x1" maxWidth="900px">
            {tokens}
          </HStack>
        </div>,
      );
    }

    return categoryContainers;
  }

  return (
    <VStack gap="x6" className="dds-main-container">
      <style>{cssStyle}</style>
      {generateCards()}
    </VStack>
  );
};
