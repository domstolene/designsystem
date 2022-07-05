import { AnchorHTMLAttributes, RefObject } from 'react';
import styled, { css } from 'styled-components';
import { cardTokens as tokens } from './Card.tokens';
import { typographyTokens } from '../Typography/Typography.tokens';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';

type ContainerProps = {
  color: CardColor;
  cardType: CardType;
};

const Container = styled.div<ContainerProps>`
  ${tokens.base}
  &::selection, *::selection {
    ${typographyTokens.selection.base}
  }
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s, border-color 0.2s;
  }
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
          width: 100%;
          box-sizing: border-box;
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

type BaseCardProps<T extends HTMLElement> = BaseComponentPropsWithChildren<
  T,
  {
    /** Fargepalett i komponenten. */
    color?: CardColor;

    /** Referanse til komponenten. */
    cardRef?: RefObject<T>;
  }
>;

export type InfoCardProps = BaseCardProps<HTMLDivElement> & {
  /** Spesifiserer funksjonalitet og formål med komponenten. **OBS!** ved `'navigation'` må `href` oppgis. Ved `'expandable'` må alle `<Card />` grupperte sammen ligge egen `<div>` container. */
  cardType: 'info';
};

export type NavigationCardProps = BaseCardProps<HTMLAnchorElement> & {
  cardType: 'navigation';
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target'>;

export type ExpandableCardProps = BaseCardProps<HTMLDivElement> & {
  cardType: 'expandable';
};

export type CardProps =
  | InfoCardProps
  | NavigationCardProps
  | ExpandableCardProps;

export const Card = (props: CardProps) => {
  const {
    color = 'filledLight',
    cardType,
    cardRef,
    children,
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  if (cardType === 'navigation') {
    const { href, target } = props;

    return (
      <Container
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        cardType={cardType}
        color={color}
        as="a"
        ref={cardRef}
        href={href}
        target={target}
      >
        {children}
      </Container>
    );
  }

  return (
    <Container
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      cardType={cardType}
      color={color}
      as="div"
      ref={cardRef}
    >
      {children}
    </Container>
  );
};
