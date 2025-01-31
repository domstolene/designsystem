import React from 'react';

import { copyButton } from './CopyButton';
import { type TokenGenericJsonObject } from './Tokens.types';
import { Table } from '../../../packages/dds-components/src';

export function splitReferenceKeys(v: string): Array<string> {
  return v.replace(/\{|\}/g, '').split('.');
}

export function isReferencedValue(v: string): boolean {
  return v.startsWith('{') && v.endsWith('}');
}

export function underscoreToDash(v: string): string {
  return v.replace('_', '-');
}

export const tableStyle = {
  marginBottom: 'var(--dds-spacing-x1-5)',
};

export const wrapperStyle = {
  maxWidth: '90ch',
  marginInline: 'auto',
};

interface TokenOverviewTypographyBaseProps {
  tokens: TokenGenericJsonObject;
  type: string;
  cssRule: string;
  hasDesc?: boolean;
  exampleWrapperStyle?: React.CSSProperties;
}

export function generateTypographyBaseBodyRows(
  props: TokenOverviewTypographyBaseProps,
) {
  const { tokens, type, cssRule, hasDesc, exampleWrapperStyle } = props;
  const rows: Array<React.JSX.Element> = [];

  for (const key in tokens) {
    const token = tokens[key];
    const tokenName = `--dds-${type}-${key.replace('_', '-')}`;
    rows.push(
      <Table.Row key={tokenName}>
        <Table.Cell>{tokenName}</Table.Cell>
        <Table.Cell>{token.value}</Table.Cell>
        <Table.Cell>
          {exampleWrapperStyle ? (
            <div style={exampleWrapperStyle}>
              <div style={{ [cssRule]: `var(${tokenName})` }}>{key}</div>
            </div>
          ) : (
            <div style={{ [cssRule]: `var(${tokenName})` }}>{key}</div>
          )}
        </Table.Cell>
        <Table.Cell>{copyButton(tokenName)}</Table.Cell>
        {hasDesc && <Table.Cell>{token.description}</Table.Cell>}
      </Table.Row>,
    );
  }

  return rows;
}

export const generateTypographyBaseTable = (
  props: TokenOverviewTypographyBaseProps,
) => {
  const { tokens, type, cssRule, hasDesc, exampleWrapperStyle } = props;

  return (
    <Table style={tableStyle}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Token</Table.Cell>
          <Table.Cell>Verdi</Table.Cell>
          <Table.Cell>Eksempel</Table.Cell>
          <Table.Cell>Kopier</Table.Cell>
          {hasDesc && <Table.Cell>Beskrivelse</Table.Cell>}
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {generateTypographyBaseBodyRows({
          tokens,
          type,
          cssRule,
          hasDesc,
          exampleWrapperStyle,
        })}
      </Table.Body>
    </Table>
  );
};
