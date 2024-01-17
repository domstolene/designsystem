import {
  ElementType,
  forwardRef,
  ThHTMLAttributes,
  TdHTMLAttributes,
} from 'react';
import styled, { css } from 'styled-components';
import { DescriptionListDesc } from '../DescriptionList';
import { tableTokens } from './Table.tokens';
import { useIsInTableHead } from './Head';

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

const StyledCell = styled.td<{
  $type: TableCellType;
}>`
  ${({ $type: type }) =>
    type === 'head' &&
    css`
      background-color: ${cell.head.backgroundColor};
    `}
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
    { children, type: _type, layout = 'left', collapsibleProps, ...rest },
    ref,
  ) => {
    const isInHead = useIsInTableHead();
    const type = _type ?? (isInHead ? 'head' : 'data');
    const as: ElementType = getTableCellType(type);

    const { isCollapsibleChild } = collapsibleProps ?? {};

    return isCollapsibleChild ? (
      <DescriptionListDesc>{children}</DescriptionListDesc>
    ) : (
      <StyledCell as={as} ref={ref} $type={type} {...rest}>
        <InnerCell $layout={layout}>{children}</InnerCell>
      </StyledCell>
    );
  },
);

Cell.displayName = 'Table.Cell';
