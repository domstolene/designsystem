import { forwardRef } from 'react';
import styled from 'styled-components';

import { stackTokens } from './Stack.tokens';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';

type Align = 'stretch' | 'center' | 'flex-start' | 'flex-end';
type Justify = 'flex-start' | 'flex-end' | 'space-between' | 'space-around';

export interface StackStyleProps {
  /**
   * Hvilken retning elementene skal plasseres i.
   */
  direction: 'horizontal' | 'vertical';
  /**
   * CSS `align-items`.
   * @default 'center'
   */
  align?: Align;
  /**
   * CSS `justify-content`.
   * @default 'flex-start'
   */
  justify?: Justify;
  /**
   * Hvilken spacing token som skal brukes som CSS `gap`.
   * @default 0
   */
  gap?: keyof typeof stackTokens.spacing | 0;
  /**
   * Hvilken spacing token som skal brukes som CSS `padding`.
   * @default 0
   */
  padding?: keyof typeof stackTokens.spacing | 0;
}

const Stack = styled.div<StackStyleProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'horizontal' ? 'row' : 'column'};
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  gap: ${props =>
    props.gap === undefined || props.gap === 0
      ? '0'
      : stackTokens.spacing[props.gap]};
  padding: ${props =>
    props.padding === undefined || props.padding === 0
      ? '0'
      : stackTokens.spacing[props.padding]};
`;
Stack.defaultProps = {
  align: 'center',
  justify: 'flex-start',
};

export type StackProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  Omit<StackStyleProps, 'direction'>
>;

export const HStack = forwardRef<HTMLDivElement, StackProps>(
  ({ id, className, htmlProps, ...rest }, ref) => (
    <Stack
      direction="horizontal"
      ref={ref}
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
    />
  )
);

export const VStack = forwardRef<HTMLDivElement, StackProps>(
  ({ id, className, htmlProps, ...rest }, ref) => (
    <Stack
      direction="vertical"
      ref={ref}
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
    />
  )
);
