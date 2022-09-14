import { forwardRef, HTMLAttributes } from 'react';
import styled, { css, CSSObject } from 'styled-components';
import { selection } from '../../helpers/styling';
import { scrollbarStyling } from '../ScrollableContainer';
import { cellTokens } from './Cell.tokens';

type StyledTableProps = Pick<TableProps, 'density' | 'stickyHeader'>;

const StyledTable = styled.table<StyledTableProps>`
  border-spacing: 0;
  border-collapse: collapse;
  *::selection {
    ${selection}
  }
  ${scrollbarStyling.webkit}
  ${scrollbarStyling.firefox as CSSObject}
  ${({ density }) =>
    density &&
    css`
      td,
      th {
        ${cellTokens.density[density].base}
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
`;

export type TableDensity = 'normal' | 'compact';

export type TableProps = {
  /**Spesifiserer hvor romslige cellene i tabellen skal være. */
  density?: TableDensity;
  /**Spesifiserer om cellene i `<Head>` skal bli sticky ved scrolling. */
  stickyHeader?: boolean;
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
