import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { selection } from '../../helpers/styling';
import { scrollbarStyling } from '../ScrollableContainer';
import { tableTokens } from './Table.tokens';
import { TableDensity, TableProps } from './Table.types';

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
          z-index: 50;
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
