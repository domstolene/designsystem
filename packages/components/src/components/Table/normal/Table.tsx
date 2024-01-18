import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { tableTokens } from './Table.tokens';
import { type TableDensity, type TableProps } from './Table.types';
import { selection } from '../../helpers';
import { scrollbarStyling } from '../../ScrollableContainer';

const { cell, row } = tableTokens;

const StyledTable = styled.table<{
  $density: TableDensity;
  $stickyHeader?: boolean;
  $withDividers?: boolean;
}>`
  border-spacing: 0;
  border-collapse: collapse;
  *::selection {
    ${selection}
  }
  ${scrollbarStyling.webkit}
  ${scrollbarStyling.firefox}
  ${({ $density }) => css`
    td,
    th {
      padding: ${cell.density[$density].padding};
    }
  `}
  ${({ $density }) =>
    $density === 'extraCompact' &&
    css`
      th {
        background-color: ${row.head.extraCompact.backgroundColor};
        font-size: ${row.head.extraCompact.fontSize};
      }
      tr[type='body'] {
        &:nth-of-type(even) {
          background-color: ${row.body.odd.backgroundColor};
        }
        &:nth-of-type(odd) {
          background-color: ${row.body.even.backgroundColor};
        }
      }
    `}
  ${({ $stickyHeader }) =>
    $stickyHeader &&
    css`
      tr[type='head'] {
        th[type='head'] {
          position: sticky;
          top: 0;
          z-index: 50;
        }
      }
    `}
  ${({ $withDividers }) =>
    $withDividers &&
    css`
      tr[type='body'] {
        border-bottom: ${row.body.withDividers.borderBottom};
      }
    `}
`;

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    { density = 'normal', stickyHeader, withDividers, children, ...rest },
    ref,
  ) => {
    return (
      <StyledTable
        {...rest}
        ref={ref}
        $density={density}
        $stickyHeader={stickyHeader}
        $withDividers={withDividers}
      >
        {children}
      </StyledTable>
    );
  },
);

Table.displayName = 'Table';
