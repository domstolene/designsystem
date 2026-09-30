import {
  type DdsTheme,
  type DdsThemeMode,
} from '#packages/dds-components/src/components/ThemeProvider/index.js';
import jsonDataBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base/ColorData.json';
import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base/Exclude/Color.json';
import jsonDomainDark from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Color/Domain/Dark.json';
import jsonDomainLight from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Color/Domain/Light.json';
import jsonDomstolDark from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Color/Elsa/Dark.json';
import jsonDomstolLight from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Color/Elsa/Light.json';
import jsonStatisticsDark from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Color/Statistics/Dark.json';
import jsonStatisticsLight from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Color/Statistics/Light.json';
import jsonSupremeDark from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Color/Supreme/Dark.json';
import jsonSupremeLight from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Color/Supreme/Light.json';

import { copyButton } from './CopyButton';
import { splitReferenceKeys } from './functions';
import { type TokenColorJsonObject, type TokenNode } from './Tokens.types';
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

const tokenPrefix = 'dds-color';
const tokenDataPrefix = 'dds-color-data';
const tokenStatisticsPrefix = 'dds-color-statistics';
const tokenDomainPrefix = 'dds-color-domain';

interface ColorTableProps {
  tokens: TokenColorJsonObject;
  tokenPrefix: string;
  baseTokens: TokenColorJsonObject;
  dataBaseTokens?: TokenColorJsonObject;
  sortGroups?: boolean;
}

interface ColorBaseCardsProps {
  tokens: TokenColorJsonObject;
  className: string;
}

function ColorBaseCards({ tokens, className }: ColorBaseCardsProps) {
  const categoryContainers: Array<React.JSX.Element> = [];

  for (const key1 in tokens) {
    const cards: Array<React.JSX.Element> = [];

    for (const key2 in tokens[key1]) {
      const token = tokens[key1][key2];
      cards.push(
        <VStack key={`${key1}-${key2}`} gap="x0.25" as="li">
          <Box
            height="100px"
            width="100px"
            style={{ background: token.value }}
          />
          <Heading level={2} typographyType="heading-xsmall">
            {key2}
          </Heading>
          <Typography
            as="span"
            typographyType="body-short-small"
            color="text-medium"
          >
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
          typographyType="heading-medium"
          className={className}
        >
          {key1}
        </Heading>
        <HStack as={StylelessList} gap="x1" maxWidth="900px" flexWrap="wrap">
          {cards}
        </HStack>
      </div>,
    );
  }

  return categoryContainers;
}

function resolveColorValue(
  token: TokenNode,
  baseTokens: TokenColorJsonObject,
  dataBaseTokens?: TokenColorJsonObject,
) {
  const [reference, alpha = ''] = token.value.split('}');
  const referenceKeys = splitReferenceKeys(reference);
  const source =
    referenceKeys[0] === tokenDataPrefix && dataBaseTokens
      ? dataBaseTokens
      : baseTokens;

  return {
    value: source[referenceKeys[1]][referenceKeys[2]].value,
    alpha,
  };
}

function ColorTable({
  tokens,
  tokenPrefix,
  baseTokens,
  dataBaseTokens,
  sortGroups = false,
}: ColorTableProps) {
  const groups = Object.keys(tokens);
  if (sortGroups) {
    groups.sort((a, b) => Number(a) - Number(b));
  }

  const rows: Array<React.JSX.Element> = [];
  for (const key1 of groups) {
    for (const key2 in tokens[key1]) {
      const token = tokens[key1][key2];
      const { value, alpha } = resolveColorValue(
        token,
        baseTokens,
        dataBaseTokens,
      );
      const tokenName = `--${tokenPrefix}-${key1}-${key2}`;

      rows.push(
        <Table.Row key={tokenName}>
          <Table.Cell>{tokenName}</Table.Cell>
          <Table.Cell>
            {value}
            {alpha}
          </Table.Cell>
          <Table.Cell>
            <Paper
              height="var(--dds-spacing-x2)"
              width="var(--dds-spacing-x2)"
              border="border-default"
              style={{ background: value }}
            />
          </Table.Cell>
          <Table.Cell>{copyButton(tokenName)}</Table.Cell>
          <Table.Cell>{token.description}</Table.Cell>
          <Table.Cell>{token.value}</Table.Cell>
        </Table.Row>,
      );
    }
  }

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Token</Table.Cell>
          <Table.Cell>Verdi</Table.Cell>
          <Table.Cell>
            <VisuallyHidden>Forhåndsvisning</VisuallyHidden>
          </Table.Cell>
          <Table.Cell>Kopier</Table.Cell>
          <Table.Cell>Beskrivelse</Table.Cell>
          <Table.Cell>Base-token</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{rows}</Table.Body>
    </Table>
  );
}

export const ColorsGenerator = (theme: DdsTheme) => {
  const tokenSets = {
    'core-light': jsonDomstolLight,
    'public-light': jsonDomstolLight,
    'core-dark': jsonDomstolDark,
    'public-dark': jsonDomstolDark,
    'supreme-light': jsonSupremeLight,
    'supreme-dark': jsonSupremeDark,
  } as const;

  const tokenSet = tokenSets[theme];
  return (
    <ColorTable
      tokens={tokenSet[tokenPrefix]}
      tokenPrefix={tokenPrefix}
      baseTokens={jsonBase[tokenPrefix]}
    />
  );
};

export const StatisticsColorsGenerator = (mode: DdsThemeMode) => {
  const tokenSet = mode === 'light' ? jsonStatisticsLight : jsonStatisticsDark;
  return (
    <ColorTable
      tokens={tokenSet[tokenStatisticsPrefix]}
      tokenPrefix={tokenStatisticsPrefix}
      baseTokens={jsonBase[tokenPrefix]}
      dataBaseTokens={jsonDataBase[tokenDataPrefix]}
      sortGroups
    />
  );
};

export const DomainColorsGenerator = (mode: DdsThemeMode) => {
  const tokenSet = mode === 'light' ? jsonDomainLight : jsonDomainDark;
  return (
    <ColorTable
      tokens={tokenSet[tokenDomainPrefix]}
      tokenPrefix={tokenDomainPrefix}
      baseTokens={jsonBase[tokenPrefix]}
      dataBaseTokens={jsonDataBase[tokenDataPrefix]}
      sortGroups
    />
  );
};

export const DataColorsBaseGenerator = () => {
  const baseTokens: TokenColorJsonObject = jsonDataBase[tokenDataPrefix];
  const cssStyle = `
                .dds-main-container {
                text-transform: capitalize;
                }
                `;

  return (
    <VStack className="dds-main-container" gap="x6">
      <style>{cssStyle}</style>
      <ColorBaseCards tokens={baseTokens} className="category-heading" />
    </VStack>
  );
};

export const ColorsBaseGenerator = () => {
  const baseTokens: TokenColorJsonObject = jsonBase[tokenPrefix];
  const cssStyle = `
                .category-heading {
                  text-transform: capitalize;
                }
                `;

  return (
    <VStack gap="x6" className="dds-main-container">
      <style>{cssStyle}</style>
      <ColorBaseCards tokens={baseTokens} className="category-heading" />
    </VStack>
  );
};
