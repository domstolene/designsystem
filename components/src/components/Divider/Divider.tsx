import { forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { dividerTokens as tokens, dividerColors } from './dividerTokens';

export type DividerColor = 'primary' | 'primaryLighter';
export type DividerDirection = 'horisontal' | 'vertical';

const DividerLine = styled.hr<DividerProps>`
  ${tokens.base}
  ${({ color }) =>
    color &&
    css`
      border-color: ${dividerColors[color]};
    `}
`;

export type DividerProps = {
  color?: DividerColor;
} & HTMLAttributes<HTMLHRElement>;

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ color = 'primary', ...rest }, ref) => {
    const lineProps = {
      color,
      ...rest
    };
    return <DividerLine ref={ref} {...lineProps} />;
  }
);
