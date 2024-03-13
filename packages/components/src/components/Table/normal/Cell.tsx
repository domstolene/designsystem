import {
  type ElementType,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
  forwardRef,
} from 'react';
import styled, { css } from 'styled-components';

import { useIsInTableHead } from './Head';
import { tableTokens } from './Table.tokens';
import { DescriptionListDesc } from '../../DescriptionList';

const { cell } = tableTokens;

const getLayoutStyle = (layout: TableCellLayout) => {
  switch (layout) {
    case 'center':
      return css`
        text-align: center;
      `;
    case 'right':
      return css`
        text-align: right;
      `;
    case 'text and icon':
      return css`
        gap: ${cell.layout.textAndIcon.gap};
      `;
    default:
    case 'left':
      return;
  }
};

const StyledCell = styled.td<{
  $type: TableCellType;
  $layout?: TableCellLayout;
}>`
  ${({ $type: type }) =>
    type === 'head' &&
    css`
      background-color: ${cell.head.backgroundColor};
    `}
  ${({ $layout: layout }) => layout && getLayoutStyle(layout)}
`;

const InnerCell = styled.div<{ $layout: TableCellLayout }>`
  display: flex;
  align-items: center;
  ${({ $layout: layout }) => getLayoutStyle(layout)}
`;

export type TableCellType = 'data' | 'head';
export type TableCellLayout = 'left' | 'right' | 'center' | 'text and icon';
export interface CollapsibleProps {
  isCollapsibleChild?: boolean;
}

export type TableCellProps = {
  /**
   * Type celle. Returnerer enten `<td>` eller `<th>`.
   * @default 'data' hvis den er brukt i `<Table.Body>` eller `<Table.Foot>`, 'head' hvis den er i `<Table.Head>`.
   */
  type?: TableCellType;
  /**Layout av innholdet i cellen; legger en flex `<div>` i cellen, unntatt 'none' som ikke legger inn noe. 'tekst and icon' legger `gap` mellom barna og andre barnet i cellen.  */
  layout?: TableCellLayout;
  /** Props ved bruk av `<CollapsibleRow>`. **OBS!** settes automatisk av forelder. */
  collapsibleProps?: CollapsibleProps;
} & (
  | TdHTMLAttributes<HTMLTableCellElement>
  | ThHTMLAttributes<HTMLTableCellElement>
);

const getTableCellType = (type: TableCellType) => {
  switch (type) {
    case 'head':
      return 'th';
    default:
    case 'data':
      return 'td';
  }
};

export const Cell = forwardRef<HTMLTableCellElement, TableCellProps>(
  (
    { children, type: _type, layout = 'left', collapsibleProps, ...rest },
    ref,
  ) => {
    const isInHead = useIsInTableHead();
    const type = _type ?? (isInHead ? 'head' : 'data');
    const as: ElementType = getTableCellType(type);

    const { isCollapsibleChild } = collapsibleProps ?? {};
    const isComplexLayout = layout === 'text and icon';

    return isCollapsibleChild ? (
      <DescriptionListDesc>{children}</DescriptionListDesc>
    ) : (
      <StyledCell
        as={as}
        ref={ref}
        $layout={isComplexLayout ? undefined : layout}
        $type={type}
        {...rest}
      >
        {isComplexLayout ? (
          <InnerCell $layout={layout}>{children}</InnerCell>
        ) : (
          children
        )}
      </StyledCell>
    );
  },
);

Cell.displayName = 'Table.Cell';
