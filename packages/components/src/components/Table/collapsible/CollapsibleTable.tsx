import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { type CollapsibleTableProps } from './CollapsibleTable.types';
import { CollapsibleTableContext } from './Table.context';
import { Table } from '../normal';

const StyledTable = styled(Table)`
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

  return (
    <CollapsibleTableContext.Provider
      value={{
        isCollapsed,
        headerValues,
        definingColumnIndex,
      }}
    >
      <StyledTable ref={ref} density={density} {...rest}>
        {children}
      </StyledTable>
    </CollapsibleTableContext.Provider>
  );
});

CollapsibleTable.displayName = 'CollapsibleTable';
