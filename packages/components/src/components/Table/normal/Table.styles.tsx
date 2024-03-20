import styled, { css } from 'styled-components';

import { tableTokens } from './Table.tokens';
import { type RowMode, type TableRowType } from './Table.types';
import { focusVisible } from '../../helpers';
import { defaultTypographyType, getFontStyling } from '../../Typography';

const { row } = tableTokens;

export const bodyRowStyles = (mode?: RowMode, selected?: boolean) => {
  return css`
    ${mode === 'sum' &&
    css`
      font-weight: 600;
      border-top: ${row.body.mode.sum.borderTop};
      border-bottom: ${row.body.mode.sum.borderBottom};
      background-color: ${row.body.mode.sum.backgroundColor};
    `}
    ${selected &&
    css`
      background-color: ${row.body.selected.backgroundColor};
    `}
  `;
};

export const StyledRow = styled.tr<{
  type: TableRowType;
  $mode?: RowMode;
  $selected?: boolean;
  $hoverable?: boolean;
}>`
  @media (prefers-reduced-motion: no-preference) {
    transition:
      background-color 0.2s,
      border-color 0.2s,
      box-shadow 0.2s;
  }

  ${getFontStyling(defaultTypographyType, true)}

  ${({ type }) =>
    type === 'head' &&
    css`
      font-weight: 600;
      text-align: left;
    `}
  ${({ type, $mode: mode, $selected: selected, $hoverable: hoverable }) =>
    type === 'body' &&
    css`
      &:nth-of-type(even) {
        background-color: ${row.body.even.backgroundColor};
        ${bodyRowStyles(mode, selected)}
      }

      &:nth-of-type(odd) {
        background-color: ${row.body.odd.backgroundColor};
        ${bodyRowStyles(mode, selected)}
      }

      ${hoverable &&
      css`
        &:hover {
          background-color: ${row.body.hover.backgroundColor};
        }
      `}
      &:focus-visible, &.focus-visible {
        ${focusVisible}
      }
    `}
`;
