import { useState } from 'storybook/internal/preview-api';

import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base/Elsa.json';
import jsonSemantic from '@norges-domstoler/dds-design-tokens/dds/tokens/Semantic/Motion/Elsa.json';

import { copyButton } from './CopyButton';
import {
  type TokenMotionJsonObject,
  type TokenMotionSemanticJsonObject,
  type TokenNode,
  isTokenNode,
} from './Tokens.types';
import { Paper, Table } from '../../../packages/dds-components/src/index';

function resolveReferencePath(
  path: string,
  base: TokenMotionJsonObject,
): string | undefined {
  const parts = path.trim().split('.');
  if (parts.length < 3) return undefined;
  const [, group, token] = parts;
  return base[group]?.[token]?.value;
}

function expandValue(raw: string, base: TokenMotionJsonObject): string {
  // Replace each { ... } with the looked-up base value. If not found, leave as-is.
  return raw.replace(/\{([^}]+)\}/g, (_match, path) => {
    const resolved = resolveReferencePath(path as string, base);
    return resolved ?? `{${path}}`;
  });
}

export const MotionGenerator = () => {
  const tokens: TokenMotionSemanticJsonObject = jsonSemantic['dds-motion'];
  const baseTokens: TokenMotionJsonObject = jsonBase['dds-motion-base'];

  const rows: Array<React.JSX.Element> = [];

  function pushRow(
    tokenName: string,
    node: TokenNode,
    resolvedValue: string,
    key: string,
  ) {
    const [leftValue, setLeftValue] = useState<boolean>(false);

    const motionProps =
      key !== 'animation'
        ? {
            onClick: () => setLeftValue(!leftValue),
            style: {
              cursor: 'pointer',
              transition: `left ${resolvedValue}`,
            },
            left: leftValue ? 'calc(100% - 2rem)' : '0',
          }
        : {
            style: { animation: `animation ${resolvedValue}` },
          };
    rows.push(
      <Table.Row key={tokenName}>
        <Table.Cell>{tokenName}</Table.Cell>
        <Table.Cell>
          <code>{resolvedValue}</code>
        </Table.Cell>
        <Table.Cell>{copyButton(tokenName)}</Table.Cell>
        <Table.Cell>{node.description}</Table.Cell>
        <Table.Cell>
          {' '}
          <Paper
            position="relative"
            width="10rem"
            height="2rem"
            border="border-default"
            display="flex"
            alignItems="center"
          >
            <Paper
              position="absolute"
              height="2rem"
              width="2rem"
              border="border-default"
              background="brand-primary-medium"
              {...motionProps}
            ></Paper>
          </Paper>
        </Table.Cell>
        <Table.Cell>
          <code>{node.value}</code>
        </Table.Cell>
      </Table.Row>,
    );
  }

  for (const [key, entry] of Object.entries(tokens)) {
    if (isTokenNode(entry)) {
      const resolved = expandValue(entry.value, baseTokens);
      const tokenName = `--dds-motion-${key}`;
      pushRow(tokenName, entry, resolved, key);
    } else {
      for (const [subKey, node] of Object.entries(entry)) {
        const resolved = expandValue(node.value, baseTokens);
        const tokenName = `--dds-motion-${key}-${subKey}`;
        pushRow(tokenName, node, resolved, key);
      }
    }
  }

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell style={{ width: '12rem' }}>Token</Table.Cell>
          <Table.Cell>Verdi</Table.Cell>
          <Table.Cell>Kopier</Table.Cell>
          <Table.Cell>Beskrivelse</Table.Cell>
          <Table.Cell>Eksempel</Table.Cell>
          <Table.Cell>Base-token</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{rows}</Table.Body>
      <style>
        {`
           @keyframes animation {
            0% {
                left: 0;
                }
                to {
                    left: calc(100% - 2rem);
                    }
                    }
                    `}
      </style>
    </Table>
  );
};

export const MotionBaseGenerator = () => {
  const tokens: TokenMotionJsonObject = jsonBase['dds-motion-base'];

  function generateBodyRows() {
    const rows: Array<React.JSX.Element> = [];

    for (const key in tokens) {
      for (const key2 in tokens[key]) {
        const [leftValue, setLeftValue] = useState<boolean>(false);
        const token = tokens[key][key2];
        const tokenName = `--dds-motion-base-${key}-${key2}`;
        const style = {
          cursor: 'pointer',
          transitionProperty: 'left',
          transitionDuration: key === 'easing' ? '600ms' : token.value,
          transitionTimingFunction: key === 'duration' ? 'linear' : token.value,
        };

        rows.push(
          <Table.Row key={tokenName}>
            <Table.Cell>{tokenName}</Table.Cell>
            <Table.Cell>{token.value}</Table.Cell>
            <Table.Cell>
              <Paper
                position="relative"
                width="10rem"
                height="2rem"
                border="border-default"
                display="flex"
                alignItems="center"
              >
                <Paper
                  position="absolute"
                  height="2rem"
                  width="2rem"
                  left={leftValue ? 'calc(100% - 2rem)' : '0'}
                  border="border-default"
                  background="brand-primary-medium"
                  onClick={() => setLeftValue(!leftValue)}
                  style={style}
                ></Paper>
              </Paper>
            </Table.Cell>
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
          <Table.Cell>Eksempel</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{generateBodyRows()}</Table.Body>
    </Table>
  );
};
