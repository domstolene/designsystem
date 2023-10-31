import { forwardRef, MouseEvent } from 'react';
import { Icon } from '@norges-domstoler/dds-icons';
import {
  UnfoldMoreIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@norges-domstoler/dds-icons';
import styled from 'styled-components';
import {
  normalizeButton,
  removeButtonStyling,
} from '@norges-domstoler/dds-core';
import { focusVisible } from '@norges-domstoler/dds-form';

import { Cell, TableCellProps } from './Cell';
import { tableTokens } from './Table.tokens';

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
