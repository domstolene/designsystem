import { forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import scrollbarStyling from '../../helpers/scrollbarStyling';
import { cellTokens } from './cellTokens';

const StyledTable = styled.table<{
  density: TableDensity;
  stickyHeader?: boolean;
}>`
  border-spacing: 0;
  border-collapse: collapse;
  ${scrollbarStyling}
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
  density?: TableDensity;
  stickyHeader?: boolean;
} & HTMLAttributes<HTMLTableElement>;

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ density = 'normal', children, ...rest }, ref) => {
    const tableProps = {
      density,
      ...rest
    };

    return (
      <StyledTable ref={ref} {...tableProps}>
        {children}
      </StyledTable>
    );
  }
);
