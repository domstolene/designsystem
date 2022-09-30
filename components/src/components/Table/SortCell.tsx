import { forwardRef, MouseEvent } from 'react';
import { Cell, TableCellProps } from './Cell';
import { tableTokens } from './Table.tokens';
import { Icon } from '../Icon';
import {
  UnfoldMoreIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '../../icons/tsx';
import styled from 'styled-components';
import { focusVisible, removeButtonStyling } from '../../helpers/styling';

const { cell } = tableTokens;

const StyledButton = styled.button`
  ${removeButtonStyling}
  display: flex;
  align-items: center;
  gap: ${cell.sort.gap};
  &:focus-visible {
    ${focusVisible}
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
    return <Icon icon={UnfoldMoreIcon} iconSize="inherit" />;
  }

  return sortOrder === 'ascending' ? (
    <Icon icon={ChevronDownIcon} iconSize="inherit" />
  ) : (
    <Icon icon={ChevronUpIcon} iconSize="inherit" />
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
