import { type MouseEvent } from 'react';

import { Cell, type TableCellProps } from './Cell';
import styles from './Table.module.css';
import { createTexts, useTranslation } from '../../../i18n';
import { cn } from '../../../utils';
import { StylelessButton } from '../../helpers';
import { focusable } from '../../helpers/styling/focus.module.css';
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

export const SortCell = ({
  isSorted,
  sortOrder,
  onClick,
  children,
  ...rest
}: TableSortCellProps) => {
  const { t } = useTranslation();
  const SortIcon = () => {
    if (!isSorted || !sortOrder) return UnfoldMoreIcon;
    if (sortOrder === 'ascending') return ChevronDownIcon;
    return ChevronUpIcon;
  };

  return (
    <Cell
      type="head"
      aria-sort={isSorted && sortOrder ? sortOrder : undefined}
      {...rest}
    >
      <StylelessButton
        onClick={onClick}
        aria-description={t(texts.changeSort)}
        className={cn(styles['sort-button'], focusable)}
      >
        {children} <Icon icon={SortIcon()} iconSize="component" />
      </StylelessButton>
    </Cell>
  );
};

SortCell.displayName = 'Table.SortCell';

const texts = createTexts({
  changeSort: {
    nb: 'Aktiver for å endre sorteringsrekkefølge',
    no: 'Aktiver for å endre sorteringsrekkefølge',
    nn: 'Aktiver for å endre sorteringsrekkjefølgje',
    en: 'Activate to change sort order',
    se: 'Aktivere rievdadit sorterenortnega',
  },
});
