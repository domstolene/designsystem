import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Table } from '../Table';
import { CollapsibleTableContext } from './Table.context';
import { CollapsibleTableProps } from '../Table.types';

interface StyledTableProps {
  isCollapsed?: boolean;
}

const StyledTable = styled(Table)<StyledTableProps>`
  width: 100%;
  ${({ withDividers }) =>
    withDividers &&
    css`
      tr[data-isopencollapsibleheader='true'] {
        border-bottom: none;
      }
    `}
`;

export const CollapsibleTable = forwardRef<
  HTMLTableElement,
  CollapsibleTableProps
>((props, ref) => {
  const {
    density = 'normal',
    children,
    isCollapsed,
    headerValues,
    definingColumnIndex = [0],
    ...rest
  } = props;

  const tableProps = {
    ref,
    density,
    isCollapsed,
    ...rest,
  };

  return (
    <CollapsibleTableContext.Provider
      value={{
        isCollapsed,
        headerValues,
        definingColumnIndex,
      }}
    >
      <StyledTable {...tableProps}>{children}</StyledTable>
    </CollapsibleTableContext.Provider>
  );
});

CollapsibleTable.displayName = 'CollapsibleTable';
