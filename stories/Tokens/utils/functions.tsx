import { copyButton } from './CopyButton';
import { type TokenGenericJsonObject } from './Tokens.types';
import { Table } from '../../../packages/dds-components/src';

export function splitReferenceKeys(v: string): Array<string> {
  return v.replace(/\{|\}/g, '').split('.');
}

export function isReferencedValue(v: string): boolean {
  return v.startsWith('{') && v.endsWith('}')
}

export const tableStyle = { maxWidth: '90ch' };

interface TokenOverviewTypographyBaseProps {
  tokens: TokenGenericJsonObject;
  type: string;
  cssRule: string;
  hasDesc?: boolean;
}

export function generateTypographyBaseBodyRows(
  props: TokenOverviewTypographyBaseProps,
) {
  const { tokens, type, cssRule, hasDesc } = props;
  const rows: Array<React.JSX.Element> = [];

  for (const key in tokens) {
    const token = tokens[key];
    const tokenName = `--dds-${type}-${key.replace('_', '-')}`;
    rows.push(
      <Table.Row key={tokenName}>
        <Table.Cell>{tokenName}</Table.Cell>
        <Table.Cell>{token.value}</Table.Cell>
        <Table.Cell>
          <span style={{ [cssRule]: `var(${tokenName})` }}>{key}</span>
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
  const { tokens, type, cssRule, hasDesc } = props;

  return (
    <Table>
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
        {generateTypographyBaseBodyRows({ tokens, type, cssRule, hasDesc })}
      </Table.Body>
    </Table>
  );
};
