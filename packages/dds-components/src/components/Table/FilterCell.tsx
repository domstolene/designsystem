import { Cell, type TableCellProps } from './Cell';
import styles from './Table.module.css';
import { createTexts, useTranslation } from '../../i18n';
import { cn } from '../../utils';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ArrowDownIcon, ArrowUpIcon, FilterListIcon } from '../Icon/icons';
import {
  Popover,
  PopoverGroup,
  type PopoverGroupProps,
  type PopoverProps,
} from '../Popover';

export type SortOrder = 'ascending' | 'descending';

export type TableFilterCellProps = {
  /**Sorteringsrekkefølge i kolonnen. Avgjør hvilket ikon skal vises i cellen og . */
  sortOrder?: SortOrder;
  /**Tallet som vises i badge, typisk antall filtre. */
  badgeCount?: number;
  /**Props for popover-elementet. */
  popoverProps?: Omit<PopoverProps, 'children'>;
  /**Innholdet som skal vises i popoveren når filterikonet klikkes. */
  popoverChildren?: React.ReactNode;
  /**Props for `<PopoverGroup>` unntatt `children`. */
  popoverGroupProps?: Omit<PopoverGroupProps, 'children'>;
} & Omit<TableCellProps, 'type'>;

export const FilterCell = ({
  sortOrder,
  children,
  className,
  badgeCount,
  popoverProps,
  popoverChildren,
  popoverGroupProps,
  ...rest
}: TableFilterCellProps) => {
  const { t } = useTranslation();
  const SortIcon = !sortOrder
    ? undefined
    : sortOrder === 'ascending'
      ? ArrowDownIcon
      : ArrowUpIcon;

  const hasBadgeCount = !!badgeCount;

  return (
    <Cell
      type="head"
      aria-sort={sortOrder ? sortOrder : undefined}
      {...rest}
      className={cn(styles['filter-cell'], className)}
    >
      {children}
      <PopoverGroup {...popoverGroupProps}>
        <Button
          icon={FilterListIcon}
          purpose="secondary"
          size="xsmall"
          aria-label={`${t(texts.openFilterMenu)}${badgeCount ? ` ${badgeCount}` : ''}`}
          badgeProps={
            hasBadgeCount
              ? { children: badgeCount, purpose: 'neutral' }
              : undefined
          }
        ></Button>
        <Popover {...popoverProps}>{popoverChildren}</Popover>
      </PopoverGroup>
      {SortIcon && <Icon icon={SortIcon} iconSize="inherit" />}
    </Cell>
  );
};

FilterCell.displayName = 'Table.FilterCell';

const texts = createTexts({
  openFilterMenu: {
    nb: 'Åpne filtreringsmeny',
    no: 'Åpne filtreringsmeny',
    nn: 'Opne filtreringsmeny',
    en: 'Open filter menu',
    se: '-',
  },
});
