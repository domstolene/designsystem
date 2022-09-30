import { forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { selection } from '../../helpers/styling';
import { scrollbarStyling } from '../ScrollableContainer';
import { tableTokens } from './Table.tokens';

const { cell, row } = tableTokens;

type StyledTableProps = {
  density: TableDensity;
  stickyHeader?: boolean;
  withDividers?: boolean;
};

const StyledTable = styled.table<StyledTableProps>`
  border-spacing: 0;
  border-collapse: collapse;
  *::selection {
    ${selection}
  }
  ${scrollbarStyling.webkit}
  ${scrollbarStyling.firefox}
  ${({ density }) =>
    css`
      td,
      th {
        padding: ${cell.density[density].padding};
      }
    `}
    ${({ stickyHeader }) =>
    stickyHeader &&
    css`
      tr[type='head'] {
        th[type='head'] {
          position: sticky;
          top: 0;
        }
      }
    `}
        ${({ withDividers }) =>
    withDividers &&
    css`
      tr[type='body'] {
        border-bottom: ${row.body.withDividers.borderBottom};
      }
    `}
`;

export type TableDensity = 'normal' | 'compact';

export type TableProps = {
  /**Spesifiserer hvor romslige cellene i tabellen skal være. */
  density?: TableDensity;
  /**Spesifiserer om cellene i `<Head>` skal bli sticky ved scrolling. */
  stickyHeader?: boolean;
  /**Legger skillelinjer mellom radene. */
  withDividers?: boolean;
} & HTMLAttributes<HTMLTableElement>;

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ density = 'normal', children, ...rest }, ref) => {
    const tableProps = {
      ref,
      density,
      ...rest,
    };

    return <StyledTable {...tableProps}>{children}</StyledTable>;
  }
);
