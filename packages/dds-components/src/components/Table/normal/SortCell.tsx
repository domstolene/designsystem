import { type MouseEvent } from 'react';

import { Cell, type TableCellProps } from './Cell';
import styles from './Table.module.css';
import { cn } from '../../../utils';
import { StylelessButton } from '../../helpers';
import { focusable } from '../../helpers/styling/focus.module.css';
import utilStyles from '../../helpers/styling/utilStyles.module.css';
import { Icon } from '../../Icon';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  UnfoldMoreIcon,
} from '../../Icon/icons';

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

export const SortCell = ({
  isSorted,
  sortOrder,
  onClick,
  children,
  ...rest
}: TableSortCellProps) => (
  <Cell
    type="head"
    aria-sort={isSorted && sortOrder ? sortOrder : undefined}
    {...rest}
  >
    <StylelessButton
      onClick={onClick}
      aria-description="Aktiver for å endre sorteringsrekkefølge"
      className={cn(styles['sort-button'], focusable)}
    >
      {children} {makeSortIcon(isSorted, sortOrder)}
    </StylelessButton>
  </Cell>
);

SortCell.displayName = 'Table.SortCell';
