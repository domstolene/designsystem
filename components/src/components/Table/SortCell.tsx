import { forwardRef, MouseEvent } from 'react';
import { Cell, TableCellProps } from './Cell';
import { cellTokens as tokens } from './Cell.tokens';
import { Icon } from '../Icon';
import {
  UnfoldMoreIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '../../icons/tsx';
import styled from 'styled-components';
import { removeButtonStyling } from '../../helpers/styling';

const SortIcon = styled(Icon)`
  ${tokens.head.sortCell.icon.base}
`;

const StyledButton = styled.button`
  ${removeButtonStyling}
  display: flex;
  align-items: center;
  &:focus-visible {
    ${tokens.head.sortCell.focus.base}
  }
`;

export type SortOrder = 'ascending' | 'descending';

export type SortCellProps = {
  /**Spesifiserer om kolonnen er sortert. */
  isSorted?: boolean;
  /**Sorteringsrekkefølge i kolonnen. Avgjør hvilket ikon skal vises i cellen. */
  sortOrder?: SortOrder;
  /**onClick-funksjon for sortering og annen logikk. */
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
} & Omit<TableCellProps, 'type'>;

const makeSortIcon = (isSorted?: boolean, sortOrder?: SortOrder) => {
  if (!isSorted || !sortOrder) {
    return <SortIcon icon={UnfoldMoreIcon} iconSize="inherit" />;
  }

  return sortOrder === 'ascending' ? (
    <SortIcon icon={ChevronDownIcon} iconSize="inherit" />
  ) : (
    <SortIcon icon={ChevronUpIcon} iconSize="inherit" />
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
