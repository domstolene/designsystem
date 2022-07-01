import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import { dividerTokens as tokens, dividerColors } from './Divider.tokens';

export type DividerColor = 'primary' | 'primaryLighter';

const DividerLine = styled.hr<DividerProps>`
  ${tokens.base}
  ${({ color }) =>
    color &&
    css`
      border-color: ${dividerColors[color]};
    `}
`;

export type DividerProps = BaseComponentProps<
  HTMLHRElement,
  {
    /** Farge på horisontal linje. */
    color?: DividerColor;
  }
>;

export const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  const { color = 'primary', id, htmlProps, ...rest } = props;

  const lineProps = {
    ...getBaseHTMLProps(id, htmlProps, rest),
    color
  };

  return <DividerLine ref={ref} {...lineProps} />;
});
