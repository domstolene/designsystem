import {
  ElementType,
  forwardRef,
  ThHTMLAttributes,
  TdHTMLAttributes,
} from 'react';
import styled, { css } from 'styled-components';
import { DescriptionListDesc } from '../DescriptionList';
import { tableTokens } from './Table.tokens';

const { cell } = tableTokens;

const getLayoutStyle = (layout: TableCellLayout) => {
  switch (layout) {
    case 'center':
      return css`
        justify-content: center;
      `;
    case 'right':
      return css`
        justify-content: flex-end;
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

interface StyledCellProps {
  type: TableCellType;
}

const StyledCell = styled.td<StyledCellProps>`
  ${({ type }) =>
    type === 'head' &&
    css`
      background-color: ${cell.head.backgroundColor};
    `}
`;

const InnerCell = styled.div<{ layout: TableCellLayout }>`
  display: flex;
  align-items: center;
  ${({ layout }) => getLayoutStyle(layout)}
`;

export type TableCellType = 'data' | 'head';
export type TableCellLayout = 'left' | 'right' | 'center' | 'text and icon';
export interface CollapsibleProps {
  isCollapsibleChild?: boolean;
}

export type TableCellProps = {
  /**Type celle. Returnerer enten `<td>` eller `<th>`. */
  type?: TableCellType;
  /**Layout av innholdet i cellen. 'tekst and icon' legger `gap` mellom barna og andre barnet i cellen.  */
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
    { children, type = 'data', layout = 'left', collapsibleProps, ...rest },
    ref,
  ) => {
    const as: ElementType = getTableCellType(type);

    const { isCollapsibleChild } = collapsibleProps ?? {};

    const cellProps = {
      as: as,
      type,
      ...rest,
    };

    const innerCellProps = {
      layout,
    };

    return isCollapsibleChild ? (
      <DescriptionListDesc>{children}</DescriptionListDesc>
    ) : (
      <StyledCell ref={ref} {...cellProps}>
        <InnerCell {...innerCellProps}>{children}</InnerCell>
      </StyledCell>
    );
  },
);

Cell.displayName = 'Table.Cell';
