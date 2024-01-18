import {
  Children,
  Fragment,
  type ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';

import { useCollapsibleTableContext } from './Table.context';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../../utils';
import { DescriptionList, DescriptionListTerm } from '../../DescriptionList';
import {
  AnimatedChevronUpDown,
  focusVisible,
  focusVisibleTransitionValue,
  removeButtonStyling,
} from '../../helpers';
import { VisuallyHidden } from '../../VisuallyHidden';
import { Table, type TableRowProps } from '../normal';
import { Cell } from '../normal/Cell';
import { useIsInTableHead } from '../normal/Head';
import { StyledRow } from '../normal/Table.styles';
import { tableTokens } from '../normal/Table.tokens';

const { collapseButton } = tableTokens;

const CollapseButton = styled.button`
  ${removeButtonStyling}
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${focusVisibleTransitionValue};
  border-radius: ${collapseButton.borderRadius};
  height: ${collapseButton.height};
  width: ${collapseButton.width};
  &:focus-visible {
    ${focusVisible}
  }
`;

const DescriptionListCell = styled(Cell)`
  & > div {
    display: block;
  }
`;

export const CollapsibleRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (
    { type: _type, mode = 'normal', selected, hoverable, children, ...rest },
    ref,
  ) => {
    const isInHead = useIsInTableHead();
    const type = _type ?? (isInHead ? 'head' : 'body');
    const rowProps = {
      $type: type,
      $mode: mode,
      $selected: selected,
      $hoverable: hoverable,
      ...rest,
    };
    const { isCollapsed, headerValues, definingColumnIndex } =
      useCollapsibleTableContext();

    const [childrenCollapsed, setChildrenCollapsed] = useState(true);

    useEffect(() => {
      !isCollapsed && setChildrenCollapsed(true);
    }, [isCollapsed]);

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
                {isValidElement(child) &&
                  cloneElement(child as ReactElement, {
                    collapsibleProps: { isCollapsibleChild: true },
                  })}
              </Fragment>
            );
          })
        : null;

    const collapsedRows =
      collapsedRenderedChildren && collapsedRenderedChildren.length > 0 ? (
        <StyledRow type={type}>
          <DescriptionListCell colSpan={definingColumnIndex.length + 1}>
            <DescriptionList>{collapsedRenderedChildren}</DescriptionList>
          </DescriptionListCell>
        </StyledRow>
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
        <StyledRow ref={ref} type={type} {...rowProps}>
          <>
            {definingColumnCells}
            <Table.Cell type="head" layout="center">
              Utvid
              <VisuallyHidden as="span">raden</VisuallyHidden>
            </Table.Cell>
          </>
        </StyledRow>
      );
    };

    const idList = spaceSeparatedIdListGenerator(collapsibleIds);

    const rowWithChevron = () => {
      if (type !== 'body' || !isCollapsed) return null;

      return (
        <StyledRow
          ref={ref}
          type={type}
          {...rowProps}
          data-isopencollapsibleheader={!childrenCollapsed && true}
        >
          {definingColumnCells}
          <Table.Cell>
            <CollapseButton
              onClick={() => setChildrenCollapsed(!childrenCollapsed)}
              aria-expanded={!childrenCollapsed}
              aria-controls={idList}
            >
              <AnimatedChevronUpDown
                isUp={childrenCollapsed ? false : true}
                height="7.5px"
                width="12px"
              />
            </CollapseButton>
          </Table.Cell>
        </StyledRow>
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
      <StyledRow ref={ref} type={type} {...rowProps}>
        {children}
      </StyledRow>
    );
  },
);

CollapsibleRow.displayName = 'CollapsibleTable.Row';
