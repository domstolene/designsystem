import React, { Children, Fragment, isValidElement, useState } from 'react';

import { useIsInTableHead } from './Head';
import styles from './Table.module.css';
import { type TableRowProps } from './Table.types';
import { createTexts, useTranslation } from '../../../i18n';
import { cn } from '../../../utils';
import { Button } from '../../Button';
import { DescriptionList, DescriptionListTerm } from '../../DescriptionList';
import { focusable } from '../../helpers/styling/focus.module.css';
import { AnimatedChevronUpDownIcon } from '../../Icon/icons/animated';
import displayStyles from '../../layout/common/display.module.css';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import { VisuallyHidden } from '../../VisuallyHidden';
import {
  CollapsibleCellContext,
  useCollapsibleTableContext,
} from '../collapsible/CollapsibleTable.context';

const PlainRow = ({
  type: _type,
  mode = 'normal',
  hoverable,
  selected,
  className,
  ...rest
}: TableRowProps) => {
  const isInHeader = useIsInTableHead();
  const type = _type ?? (isInHeader ? 'head' : 'body');
  return (
    <tr
      className={cn(
        className,
        styles.row,
        type === 'body' && styles['row--body'],
        mode === 'sum' && styles['row--sum'],
        selected && styles['row--selected'],
        hoverable && styles['row--hoverable'],
        (type === 'head' || mode === 'sum') && typographyStyles.bold,
        focusable,
      )}
      {...rest}
    />
  );
};

export const Row = ({
  type: _type,
  className,
  mode = 'normal',
  children,
  ref,
  ...rest
}: TableRowProps) => {
  const { t } = useTranslation();
  const isInHead = useIsInTableHead();
  const type = _type ?? (isInHead ? 'head' : 'body');
  const { collapseBelow, labelsStore } = useCollapsibleTableContext();
  const [childrenCollapsed, setChildrenCollapsed] = useState(true);

  const sharedRowProps = (extraClass?: string) => ({
    type,
    mode,
    className: cn(className, extraClass),
    ...rest,
  });

  if (!collapseBelow) {
    return (
      <PlainRow ref={ref} {...sharedRowProps()}>
        {children}
      </PlainRow>
    );
  }

  const childrenArray = Children.toArray(children);

  interface CellProps {
    collapse?: boolean;
    collapseKey?: string;
  }

  const isCollapsingCell = (
    child: unknown,
  ): child is React.ReactElement<CellProps> =>
    isValidElement<CellProps>(child) && !!child.props.collapseKey;

  const definingCells = childrenArray.filter(child => !isCollapsingCell(child));
  const collapseCells = childrenArray.filter(isCollapsingCell);

  if (collapseCells.length === 0) {
    return (
      <PlainRow ref={ref} {...sharedRowProps()}>
        {children}
      </PlainRow>
    );
  }

  const hideAboveCn =
    collapseBelow !== 'xl'
      ? displayStyles[`${collapseBelow}-hide-above`]
      : undefined;
  const hideBelowCn = displayStyles[`${collapseBelow}-hide-below`];

  // --- collapsible head row ---
  if (type === 'head') {
    return (
      <>
        <PlainRow ref={ref} {...sharedRowProps(hideBelowCn)}>
          {children}
        </PlainRow>
        <PlainRow {...sharedRowProps(hideAboveCn)}>
          <>
            {definingCells}
            <th className={styles['cell--head']}>
              {t(texts.expand)}
              <VisuallyHidden>{t(texts.row)}</VisuallyHidden>
            </th>
          </>
        </PlainRow>
      </>
    );
  }

  // --- collapsible body rows ---

  const descriptionListItems = collapseCells.map((child, index) => {
    const label = labelsStore.get(child.props.collapseKey ?? '');

    return (
      <Fragment key={`DL-${index}`}>
        <DescriptionListTerm>{label}</DescriptionListTerm>
        <CollapsibleCellContext value={true}>{child}</CollapsibleCellContext>
      </Fragment>
    );
  });

  const iconState = childrenCollapsed ? 'down' : 'up';

  return (
    <>
      <PlainRow ref={ref} {...sharedRowProps(hideBelowCn)}>
        {children}
      </PlainRow>
      <PlainRow
        {...sharedRowProps(
          cn(
            hideAboveCn,
            !childrenCollapsed && styles['row--collapsible-header--open'],
          ),
        )}
      >
        {definingCells}
        <td className={styles['cell--right']}>
          <Button
            onClick={() => setChildrenCollapsed(!childrenCollapsed)}
            aria-expanded={!childrenCollapsed}
            icon={AnimatedChevronUpDownIcon}
            iconState={iconState}
            purpose="tertiary"
            size="xsmall"
          />
        </td>
      </PlainRow>
      {!childrenCollapsed && (
        <PlainRow {...sharedRowProps(hideAboveCn)}>
          <td colSpan={definingCells.length + 1}>
            <DescriptionList>{descriptionListItems}</DescriptionList>
          </td>
        </PlainRow>
      )}
    </>
  );
};

Row.displayName = 'Table.Row';

const texts = createTexts({
  expand: {
    nb: 'Utvid',
    no: 'Utvid',
    nn: 'Utvid',
    en: 'Expand',
    se: 'Viiddit',
  },
  row: {
    nb: 'raden',
    no: 'raden',
    nn: 'rada',
    en: 'row',
    se: 'gurgadus',
  },
});
