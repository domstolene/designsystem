import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import { dividerTokens as tokens } from './Divider.tokens';

export type DividerColor = 'primary' | 'primaryLighter';

const StyledDivider = styled.hr<DividerProps>`
  border: 0;
  background-color: transparent;
  border-top: ${tokens.borderTop};
  margin-top: ${tokens.marginTop};
  margin-bottom: ${tokens.marginBottom};
  ${({ color }) =>
    color &&
    css`
      border-color: ${tokens.color[color].borderColor};
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
  const { color = 'primary', id, className, htmlProps, ...rest } = props;

  const lineProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    color,
  };

  return <StyledDivider ref={ref} {...lineProps} />;
});
