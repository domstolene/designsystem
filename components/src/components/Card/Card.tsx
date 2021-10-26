import {
  AnchorHTMLAttributes,
  ElementType,
  forwardRef,
  HTMLAttributes
} from 'react';
import styled, { css } from 'styled-components';
import { cardTokens as tokens } from './Card.tokens';
import { typographyTokens } from '../Typography/Typography.tokens';

type ContainerProps = Pick<CardProps, 'color' | 'cardType'>;

const Container = styled.div<ContainerProps>`
  ${tokens.base}
  &::selection, *::selection {
    ${typographyTokens.selection.base}
  }
  transition: box-shadow 0.2s, border-color 0.2s;
  ${({ color }) =>
    color &&
    css`
      ${tokens.colors[color].base}
    `}
  ${({ cardType }) =>
    cardType === 'navigation' &&
    css`
      text-decoration: none;
      &:hover {
        ${tokens.navigation.hover.base}
      }
      &:focus {
        outline: none;
        ${tokens.navigation.focus.base}
      }
    `}
`;
export type CardColor =
  | 'filledDark'
  | 'filledLight'
  | 'strokeDark'
  | 'strokeLight';

export type CardType = 'info' | 'navigation';

export type CardProps = {
  color?: CardColor;
  cardType?: CardType;
} & (HTMLAttributes<HTMLDivElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, cardType = 'info', color = 'filledLight', ...rest }, ref) => {
    const as: ElementType = cardType === 'navigation' ? 'a' : 'div';

    const containerProps = {
      ref,
      as,
      cardType,
      color,
      ...rest
    };

    return <Container {...containerProps}>{children}</Container>;
  }
);
