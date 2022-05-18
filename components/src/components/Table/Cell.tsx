import {
  ElementType,
  forwardRef,
  ThHTMLAttributes,
  TdHTMLAttributes
} from 'react';
import styled, { css } from 'styled-components';
import { cellTokens as tokens } from './Cell.tokens';

const layoutStyle = (layout: TableCellLayout) => {
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
        & > *:first-of-type {
          ${tokens.data.layout.textAndIcon.base}
        }
      `;
    default:
    case 'left':
      return;
  }
};

type StyledCellProps = Pick<TableCellProps, 'type'>;

const StyledCell = styled.td<StyledCellProps>`
  ${tokens.base}
  ${({ type }) =>
    type &&
    css`
      ${tokens[type].base}
    `}
`;

const InnerCell = styled.div<{ layout: TableCellLayout }>`
  display: flex;
  align-items: center;
  ${({ layout }) => layoutStyle(layout)}
`;

export type TableCellType = 'data' | 'head';
export type TableCellLayout = 'left' | 'right' | 'center' | 'text and icon';

export type TableCellProps = {
  /**Type celle. Returnerer enten `<td>` eller `<th>`. */
  type?: TableCellType;
  /**Layout av innholdet i cellen. 'tekst and icon' legger margin mellom første barnet og andre barnet i cellen, og skal hovedsakelig brukes når innholdet er tekst og ikon; tekst må bli wrappet i `<span>` hvis det er det første barnet.  */
  layout?: TableCellLayout;
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
  ({ children, type = 'data', layout = 'left', ...rest }, ref) => {
    const as: ElementType = getTableCellType(type);

    const cellProps = {
      as: as,
      type,
      ...rest
    };

    const innerCellProps = {
      layout
    };

    return (
      <StyledCell ref={ref} {...cellProps}>
        <InnerCell {...innerCellProps}>{children}</InnerCell>
      </StyledCell>
    );
  }
);
