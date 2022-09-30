import { forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { focusVisibleInset } from '../../helpers/styling';
import { tableTokens } from './Table.tokens';

const { row } = tableTokens;

const bodyStyles = (mode?: RowMode, selected?: boolean) => {
  return css`
    ${mode === 'sum' &&
    css`
      font-weight: 600;
      border-top: ${row.body.mode.sum.borderTop};
      border-bottom: ${row.body.mode.sum.borderBottom};
      background-color: ${row.body.mode.sum.backgroundColor};
    `}
    ${selected &&
    css`
      background-color: ${row.body.selected.backgroundColor};
    `}
  `;
};

type StyledProps = {
  type: TableRowType;
  mode?: RowMode;
  selected?: boolean;
  hoverable?: boolean;
};

const StyledRow = styled.tr<StyledProps>`
  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  ${row.base.font}
  color: ${row.base.color};

  ${({ type }) =>
    type === 'head' &&
    css`
      font-weight: 600;
      text-align: left;
    `}

  ${({ type, mode, selected, hoverable }) =>
    type === 'body' &&
    css`
      &:nth-of-type(even) {
        background-color: ${row.body.even.backgroundColor};
        ${bodyStyles(mode, selected)}
      }

      &:nth-of-type(odd) {
        background-color: ${row.body.odd.backgroundColor};
        ${bodyStyles(mode, selected)}
      }

      ${hoverable &&
      css`
        &:hover {
          background-color: ${row.body.hover.backgroundColor};
        }
      `}
      &:focus-visible, &.focus-visible {
        ${focusVisibleInset}
      }
    `}
`;

export type TableRowType = 'body' | 'head';
export type RowMode = 'normal' | 'sum';

export type TableRowProps = {
  /**Spesifiserer om raden skal brukes i `<head>` eller `<body>`-seksjonen. */
  type?: TableRowType;
  /**Custom modus for rader som har ytterligere semantisk betydning (f.eks. summeringsrad), definerer kun styling. Ved bruk av sum må `<Cell>` med tall i høyrestilles vha layout prop.  */
  mode?: RowMode;
  /**Spesifiserer om raden har blitt valgt/markert. */
  selected?: boolean;
  /**Spesifiserer om raden skal ha hover styling. Brukes hovedsakelig på klikkbare rader. */
  hoverable?: boolean;
} & HTMLAttributes<HTMLTableRowElement>;

export const Row = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ type = 'body', mode = 'normal', children, ...rest }, ref) => {
    const rowProps = {
      type,
      mode,
      ...rest,
    };

    return (
      <StyledRow ref={ref} {...rowProps}>
        {children}
      </StyledRow>
    );
  }
);
