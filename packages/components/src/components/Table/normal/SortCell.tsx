import { type MouseEvent, forwardRef } from 'react';
import styled from 'styled-components';

import { Cell, type TableCellProps } from './Cell';
import { tableTokens } from './Table.tokens';
import {
  focusVisible,
  normalizeButton,
  removeButtonStyling,
} from '../../helpers';
import { Icon } from '../../Icon';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  UnfoldMoreIcon,
} from '../../Icon/icons';

const { cell } = tableTokens;

const StyledButton = styled.button`
  ${normalizeButton}
  user-select: text;
  ${removeButtonStyling}
  display: flex;
  align-items: center;
  gap: ${cell.sort.gap};
  &:focus-visible {
    ${focusVisible}
  }
`;

export type SortOrder = 'ascending' | 'descending';

export type TableSortCellProps = {
  /**Spesifiserer om kolonnen er sortert. */
  isSorted?: boolean;
  /**Sorteringsrekkefølge i kolonnen. Avgjør hvilket ikon skal vises i cellen. */
  sortOrder?: SortOrder;
  /**onClick-funksjon for sortering og annen logikk. */
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
} & Omit<TableCellProps, 'type'>;

const makeSortIcon = (isSorted?: boolean, sortOrder?: SortOrder) => {
  if (!isSorted || !sortOrder) {
    return <Icon icon={UnfoldMoreIcon} iconSize="inherit" />;
  }

  return sortOrder === 'ascending' ? (
    <Icon icon={ChevronDownIcon} iconSize="inherit" />
  ) : (
    <Icon icon={ChevronUpIcon} iconSize="inherit" />
  );
};

export const SortCell = forwardRef<HTMLTableCellElement, TableSortCellProps>(
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
  ),
);

SortCell.displayName = 'Table.SortCell';
