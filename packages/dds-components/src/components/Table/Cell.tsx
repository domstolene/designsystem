import { type ComponentPropsWithRef } from 'react';

import {
  useCollapsibleTableContext,
  useIsCollapsibleChild,
} from './CollapsibleTable.context';
import { useIsInTableHead } from './Head';
import styles from './Table.module.css';
import { cn } from '../../utils';
import { DescriptionListDesc } from '../DescriptionList';
import displayStyles from '../layout/common/display.module.css';

export type TableCellType = 'data' | 'head';
export type TableCellLayout = 'left' | 'right' | 'center' | 'text and icon';

export type TableCellProps = {
  /**
   * Type celle. Returnerer enten `<td>` eller `<th>`.
   * @default "data" hvis den er brukt i `<Table.Body>` eller `<Table.Foot>`, 'head' hvis den er i `<Table.Head>`.
   */
  type?: TableCellType;
  /**
   * Layout for innholdet i cellen håndtert med `text-align`;
   * `'text and icon'` legger inn en flex `<div>` i cellen med `gap` mellom barna.
   * @default "left"
   */
  layout?: TableCellLayout;
  /**
   * Nøkkel som kobler en header-celle med tilhørende body-celler i kollapset visning i kollapset `<Table>`.
   */
  collapseKey?: string;
} & (ComponentPropsWithRef<'td'> | ComponentPropsWithRef<'th'>);

export const Cell = ({
  children,
  type: _type,
  layout = 'left',
  collapseKey,
  className,
  ...rest
}: TableCellProps) => {
  const isInHead = useIsInTableHead();
  const type = _type ?? (isInHead ? 'head' : 'data');
  const isCollapsibleChild = useIsCollapsibleChild();
  const { collapseBelow, labelsStore } = useCollapsibleTableContext();
  if (collapseBelow && collapseKey && type === 'head') {
    labelsStore.set(collapseKey, children);
  }

  const isComplexLayout = layout === 'text and icon';

  if (isCollapsibleChild) {
    return <DescriptionListDesc>{children}</DescriptionListDesc>;
  }

  const hideBelowCn =
    !!collapseKey && collapseBelow
      ? displayStyles[`${collapseBelow}-hide-below`]
      : undefined;

  const inner = isComplexLayout ? (
    <div className={styles.cell__inner}>{children}</div>
  ) : (
    children
  );

  if (type === 'head') {
    return (
      <th
        {...rest}
        className={cn(
          className,
          !isComplexLayout && styles[`cell--${layout}`],
          styles['cell--head'],
          hideBelowCn,
        )}
      >
        {inner}
      </th>
    );
  }

  return (
    <td
      {...rest}
      className={cn(
        className,
        !isComplexLayout && styles[`cell--${layout}`],
        hideBelowCn,
      )}
    >
      {inner}
    </td>
  );
};

Cell.displayName = 'Table.Cell';
