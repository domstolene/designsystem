import {
  Children,
  Fragment,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from 'react';

import { useCollapsibleTableContext } from './Table.context';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../../utils';
import { DescriptionList, DescriptionListTerm } from '../../DescriptionList';
import { AnimatedChevronUpDown, StylelessButton } from '../../helpers';
import { focusable } from '../../helpers/styling/focus.module.css';
import { VisuallyHidden } from '../../VisuallyHidden';
import { Table, type TableRowProps } from '../normal';
import { Cell, type TableCellProps } from '../normal/Cell';
import { useIsInTableHead } from '../normal/Head';
import { Row } from '../normal/Row';
import styles from '../normal/Table.module.css';

export const CollapsibleRow = ({
  type: _type,
  className,
  mode = 'normal',
  selected,
  hoverable,
  children,
  ref,
  ...rest
}: TableRowProps) => {
  const isInHead = useIsInTableHead();
  const type = _type ?? (isInHead ? 'head' : 'body');
  const { isCollapsed, headerValues, definingColumnIndex } =
    useCollapsibleTableContext();
  const [childrenCollapsed, setChildrenCollapsed] = useState(true);

  useEffect(() => {
    !isCollapsed && setChildrenCollapsed(true);
  }, [isCollapsed]);

  const rowProps = (isOpenCollapsibleHeader?: boolean) => {
    return {
      mode,
      selected,
      hoverable,
      className: cn(
        className,
        isOpenCollapsibleHeader && styles['row--colapsible-header--open'],
      ),
      ...rest,
    };
  };

  const collapsedHeaderValues = headerValues.filter(
    (column, index) => definingColumnIndex.indexOf(index) === -1,
  );

  const childrenArray = Children.toArray(children);
  const collapsedChildren = childrenArray.filter(
    (column, index) => definingColumnIndex.indexOf(index) === -1,
  );

  const prefix = 'collapsibleRow';
  const collapsibleIds: Array<string> = [];

  const collapsedRenderedChildren =
    isCollapsed && collapsedHeaderValues.length > 0
      ? collapsedChildren.map(function (child, index) {
          const id = derivativeIdGenerator(prefix, index.toString());
          collapsibleIds.push(id);

          return (
            <Fragment key={`DL-${index}`}>
              <DescriptionListTerm>
                {collapsedHeaderValues[index].content}
              </DescriptionListTerm>
              {isValidElement<TableCellProps>(child) &&
                cloneElement(child, {
                  collapsibleProps: { isCollapsibleChild: true },
                })}
            </Fragment>
          );
        })
      : null;

  const collapsedRows =
    collapsedRenderedChildren && collapsedRenderedChildren.length > 0 ? (
      <Row {...rowProps()}>
        <Cell colSpan={definingColumnIndex.length + 1}>
          <DescriptionList>{collapsedRenderedChildren}</DescriptionList>
        </Cell>
      </Row>
    ) : null;

  const definingColumnCells = childrenArray
    .slice()
    .filter((column, index) => definingColumnIndex.indexOf(index) > -1)
    .sort((a, b) => {
      return (
        definingColumnIndex.indexOf(childrenArray.indexOf(a)) -
        definingColumnIndex.indexOf(childrenArray.indexOf(b))
      );
    });

  const headerRow = () => {
    if (type !== 'head' || !isCollapsed) return null;

    return (
      <Row ref={ref} {...rowProps()}>
        <>
          {definingColumnCells}
          <Table.Cell type="head" layout="center">
            Utvid
            <VisuallyHidden>raden</VisuallyHidden>
          </Table.Cell>
        </>
      </Row>
    );
  };

  const idList = spaceSeparatedIdListGenerator(collapsibleIds);

  const rowWithChevron = () => {
    if (type !== 'body' || !isCollapsed) return null;

    return (
      <Row ref={ref} {...rowProps(!childrenCollapsed && true)}>
        {definingColumnCells}
        <Table.Cell>
          <StylelessButton
            onClick={() => setChildrenCollapsed(!childrenCollapsed)}
            aria-expanded={!childrenCollapsed}
            aria-controls={idList}
            className={cn(styles['collapse-button'], focusable)}
          >
            <AnimatedChevronUpDown
              isUp={childrenCollapsed ? false : true}
              height="8px"
              width="12px"
            />
          </StylelessButton>
        </Table.Cell>
      </Row>
    );
  };

  return isCollapsed &&
    collapsedRenderedChildren &&
    collapsedRenderedChildren.length > 0 ? (
    <>
      {headerRow()}
      {type === 'body' && (
        <>
          {rowWithChevron()}
          {childrenCollapsed ? null : collapsedRows}
        </>
      )}
    </>
  ) : (
    <Row ref={ref} {...rowProps()}>
      {children}
    </Row>
  );
};

CollapsibleRow.displayName = 'CollapsibleTable.Row';
