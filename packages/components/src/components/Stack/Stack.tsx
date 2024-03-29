import { type StandardProperties } from 'csstype';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { stackTokens } from './Stack.tokens';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';

export interface StackStyleProps {
  /**
   * Hvilken retning elementene skal plasseres i.
   */
  direction: 'horizontal' | 'vertical';
  /**
   * CSS `align-items`.
   * @default 'center'
   */
  align?: StandardProperties['alignItems'];
  /**
   * CSS `justify-content`.
   * @default 'flex-start'
   */
  justify?: StandardProperties['justifyContent'];
  /**
   * Hvilken spacing token som skal brukes som CSS `gap`.
   */
  gap?: keyof typeof stackTokens.spacing | 0;
  /**
   * Hvilken spacing token som skal brukes som CSS `padding`.
   */
  padding?: keyof typeof stackTokens.spacing | 0;
}

const Stack = styled.div.withConfig({
  shouldForwardProp: prop => {
    const styleOnlyProps: Array<keyof StackStyleProps> = [
      'align',
      'direction',
      'gap',
      'justify',
      'padding',
    ];

    return !styleOnlyProps.some(p => p === prop);
  },
})<StackStyleProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'horizontal' ? 'row' : 'column'};
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};

  ${({ gap }) =>
    gap !== undefined &&
    css`
      gap: ${gap === 0 ? '0' : stackTokens.spacing[gap]};
    `}

  ${({ padding }) =>
    padding !== undefined &&
    css`
      padding: ${padding === 0 ? '0' : stackTokens.spacing[padding]};
    `}
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
  ),
);

HStack.displayName = 'HStack';

export const VStack = forwardRef<HTMLDivElement, StackProps>(
  ({ id, className, htmlProps, ...rest }, ref) => (
    <Stack
      direction="vertical"
      ref={ref}
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
    />
  ),
);

VStack.displayName = 'VStack';
