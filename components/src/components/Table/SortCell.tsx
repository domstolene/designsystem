import { forwardRef, MouseEvent } from 'react';
import { Cell, TableCellProps } from './Cell';
import { cellTokens as tokens } from './Cell.tokens';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import { IconWrapper } from '../../helpers/IconWrapper';
import styled from 'styled-components';
import { removeButtonStyling } from '../../helpers/styling';

const SortIconWrapper = styled(IconWrapper)`
  ${tokens.head.sortCell.icon.base}
`;

const StyledButton = styled.button`
  ${removeButtonStyling}
  display: flex;
  align-items: center;
`;

export type SortOrder = 'ascending' | 'descending';

export type SortCellProps = {
  isSorted?: boolean;
  sortOrder?: SortOrder;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
} & Omit<TableCellProps, 'type'>;

const makeSortIcon = (isSorted?: boolean, sortOrder?: SortOrder) => {
  if (!isSorted || !sortOrder) {
    return <SortIconWrapper Icon={UnfoldMoreIcon} iconSize="inline" />;
  }

  return sortOrder === 'ascending' ? (
    <SortIconWrapper Icon={KeyboardArrowDownIcon} iconSize="inline" />
  ) : (
    <SortIconWrapper Icon={KeyboardArrowUpIcon} iconSize="inline" />
  );
};

export const SortCell = forwardRef<HTMLTableCellElement, SortCellProps>(
  ({ isSorted, sortOrder, onClick, children, ...rest }, ref) => (
    <Cell
      ref={ref}
      type="head"
      aria-sort={isSorted && sortOrder ? sortOrder : undefined}
      {...rest}
    >
      <StyledButton
        onClick={onClick}
        aria-description="Aktiver for å endre sorteringsrekkefølge"
      >
        {children} {makeSortIcon(isSorted, sortOrder)}
      </StyledButton>
    </Cell>
  )
);
