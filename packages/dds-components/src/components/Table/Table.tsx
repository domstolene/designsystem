import { type ComponentPropsWithRef, type ReactNode, useRef } from 'react';

import { CollapsibleTableContext } from './CollapsibleTable.context';
import styles from './Table.module.css';
import { type Breakpoint, type Size } from '../..';
import { cn } from '../../utils';
import { scrollbar } from '../helpers/styling/utilStyles.module.css';
import tgStyles from '../Typography/typographyStyles.module.css';

export type TableSize = Extract<Size, 'small' | 'medium' | 'large'>;

export type TableProps = {
  /**
   * Størrelse på tabellen. Påvirker tetthet i cellene og font.
   * @default "medium"
   */
  size?: TableSize;
  /**Spesifiserer om cellene i `<Head>` skal bli sticky ved scrolling. */
  stickyHeader?: boolean;
  /**Legger skillelinjer mellom radene. */
  withDividers?: boolean;
  /**Rader veksler bakgrunnsfarge.
   * @default true
   */
  withStripes?: boolean;
  /**Implementerer collapsible-oppførsel. Brekkpunkt der tabellen kollapser. Tabellen viser kollapset layout under dette brekkpunktet. */
  collapseBelow?: Breakpoint;
} & ComponentPropsWithRef<'table'>;

export const Table = ({
  size = 'medium',
  stickyHeader,
  withDividers,
  withStripes = true,
  className,
  children,
  collapseBelow,
  ...rest
}: TableProps) => {
  const tgSize = (): TableSize => {
    switch (size) {
      case 'small':
        return 'small';
      case 'medium':
      case 'large':
        return 'medium';
    }
  };

  const labelsStore = useRef<Map<string, ReactNode>>(new Map());

  const table = (
    <table
      {...rest}
      className={cn(
        className,
        styles.table,
        styles[`table--${size}`],
        withDividers && styles['table--with-dividers'],
        withStripes && styles['table--striped'],
        withStripes && collapseBelow && styles['table--collapsible--striped'],
        stickyHeader && styles['table--sticky-header'],
        scrollbar,
        tgStyles[`body-long-${tgSize()}`],
      )}
    >
      {children}
    </table>
  );

  return collapseBelow ? (
    <CollapsibleTableContext
      value={{ collapseBelow, labelsStore: labelsStore.current }}
    >
      {table}
    </CollapsibleTableContext>
  ) : (
    table
  );
};
Table.displayName = 'Table';
