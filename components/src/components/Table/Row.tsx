import { forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { rowTokens as tokens } from './Row.tokens';
import '../../styles/fontStyles.css';

const bodyStyles = (mode?: RowMode, selected?: boolean) => {
  return css`
    ${mode &&
    css`
      ${tokens.body.mode[mode].base}
    `}
    ${selected &&
    css`
      ${tokens.body.selected.base}
    `}
  `;
};

type StyledProps = Pick<
  TableRowProps,
  'type' | 'mode' | 'hoverable' | 'selected'
>;

const StyledRow = styled.tr<StyledProps>`
  transition: background-color 0.2s;

  ${({ type }) =>
    type &&
    css`
      ${tokens[type].base}
    `}

  ${({ type, mode, selected, hoverable }) =>
    type === 'body' &&
    css`
      &:nth-of-type(even) {
        ${tokens.body.even.base}
        ${bodyStyles(mode, selected)}
      }

      &:nth-of-type(odd) {
        ${tokens.body.odd.base}
        ${bodyStyles(mode, selected)}
      }

      ${hoverable &&
      css`
        &:hover {
          ${tokens.body.hover.base}
        }
      `}
    `}
`;

export type TableRowType = 'body' | 'head';
export type RowMode = 'normal' | 'sum';

export type TableRowProps = {
  type?: TableRowType;
  mode?: RowMode;
  selected?: boolean;
  hoverable?: boolean;
} & HTMLAttributes<HTMLTableRowElement>;

export const Row = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ type = 'body', mode = 'normal', children, ...rest }, ref) => {
    const rowProps = {
      type,
      mode,
      ...rest
    };

    return (
      <StyledRow ref={ref} {...rowProps}>
        {children}
      </StyledRow>
    );
  }
);
