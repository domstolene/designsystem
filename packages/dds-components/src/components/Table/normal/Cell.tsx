import { type ComponentPropsWithRef } from 'react';

import { useIsInTableHead } from './Head';
import styles from './Table.module.css';
import { cn } from '../../../utils';
import { DescriptionListDesc } from '../../DescriptionList';

export type TableCellType = 'data' | 'head';
export type TableCellLayout = 'left' | 'right' | 'center' | 'text and icon';
export interface CollapsibleProps {
  isCollapsibleChild?: boolean;
}

export type TableCellProps = {
  /**
   * Type celle. Returnerer enten `<td>` eller `<th>`.
   * @default "data" hvis den er brukt i `<Table.Body>` eller `<Table.Foot>`, 'head' hvis den er i `<Table.Head>`.
   */
  type?: TableCellType;
  /**Layout av innholdet i cellen; legger en flex `<div>` i cellen, unntatt 'none' som ikke legger inn noe. 'tekst and icon' legger `gap` mellom barna og andre barnet i cellen.
   * @default "left"
   */
  layout?: TableCellLayout;
  /** Props ved bruk av `<CollapsibleRow>`. **OBS!** settes automatisk av forelder. */
  collapsibleProps?: CollapsibleProps;
} & (ComponentPropsWithRef<'td'> | ComponentPropsWithRef<'th'>);

export const Cell = ({
  children,
  type: _type,
  layout = 'left',
  collapsibleProps,
  className,
  ...rest
}: TableCellProps) => {
  const isInHead = useIsInTableHead();
  const type = _type ?? (isInHead ? 'head' : 'data');

  const { isCollapsibleChild } = collapsibleProps ?? {};
  const isComplexLayout = layout === 'text and icon';

  return isCollapsibleChild ? (
    <DescriptionListDesc>{children}</DescriptionListDesc>
  ) : type === 'head' ? (
    <th
      {...rest}
      className={cn(
        className,
        !isComplexLayout && styles[`cell--${layout}`],
        styles['cell--head'],
      )}
    >
      {isComplexLayout ? (
        <div className={styles.cell__inner}>{children}</div>
      ) : (
        children
      )}
    </th>
  ) : (
    <td
      {...rest}
      className={cn(className, !isComplexLayout && styles[`cell--${layout}`])}
    >
      {isComplexLayout ? (
        <div className={styles.cell__inner}>{children}</div>
      ) : (
        children
      )}
    </td>
  );
};

Cell.displayName = 'Table.Cell';
