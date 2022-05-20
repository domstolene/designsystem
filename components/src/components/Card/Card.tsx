import { AnchorHTMLAttributes, HTMLAttributes, RefObject } from 'react';
import styled, { css } from 'styled-components';
import { cardTokens as tokens } from './Card.tokens';
import { typographyTokens } from '../Typography/Typography.tokens';

type ContainerProps = {
  color: CardColor;
  cardType: CardType;
};

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
    cardType === 'navigation'
      ? css`
          text-decoration: none;
          &:hover {
            ${tokens.navigation.hover.base}
          }
          &:focus {
            outline: none;
            ${tokens.navigation.focus.base}
          }
        `
      : cardType === 'expandable'
      ? css`
          &:not(:first-of-type) {
            border-top: none;
          }
        `
      : ''}
`;
export type CardColor =
  | 'filledDark'
  | 'filledLight'
  | 'strokeDark'
  | 'strokeLight';

export type CardType = 'info' | 'navigation' | 'expandable';

export type InfoCardProps = {
  /** Fargepalett i komponenten. */
  color?: CardColor;
  /** Spesifiserer funksjonalitet og formål med komponenten. **OBS!** ved `'navigation'` må `href` oppgis. Ved `'expandable'` må alle `<Card />` grupperte sammen ligge egen `<div>` container. */
  cardType: 'info';
  /** Referanse til komponenten. */
  cardRef?: RefObject<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement>;

export type NavigationCardProps = {
  color?: CardColor;
  cardType: 'navigation';
  cardRef?: RefObject<HTMLAnchorElement>;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type ExpandableCardProps = {
  color?: CardColor;
  cardType: 'expandable';
  cardRef?: RefObject<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement>;

export type CardProps =
  | InfoCardProps
  | NavigationCardProps
  | ExpandableCardProps;

export const Card = (props: CardProps) => {
  const color = props.color ?? 'filledLight';

  if (props.cardType === 'navigation') {
    return (
      <Container
        {...props}
        cardType={props.cardType}
        color={color}
        as="a"
        ref={props.cardRef}
      >
        {props.children}
      </Container>
    );
  }

  return (
    <Container
      {...props}
      cardType={props.cardType}
      color={color}
      as="div"
      ref={props.cardRef}
    >
      {props.children}
    </Container>
  );
};
