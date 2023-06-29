import { AnchorHTMLAttributes, RefObject } from 'react';
import styled, { css } from 'styled-components';
import { cardTokens as tokens } from './Card.tokens';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
  selection,
} from '@norges-domstoler/dds-core';
import {
  getFontStyling,
  defaultTypographyType,
} from '@norges-domstoler/dds-typography';
import {
  hoverWithBorder,
  focusVisibleWithBorder,
} from '@norges-domstoler/dds-form';

type ContainerProps = {
  color: CardColor;
  cardType: CardType;
};

const Container = styled.div<ContainerProps>`
  border: ${tokens.base.border};
  ${getFontStyling(defaultTypographyType)};
  &::selection,
  *::selection {
    ${selection}
  }
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s, border-color 0.2s;
  }
  ${({ color }) =>
    color &&
    css`
      color: ${tokens.colors[color].color};
      background-color: ${tokens.colors[color].backgroundColor};
      border-color: ${tokens.colors[color].borderColor};
    `}
  ${({ cardType }) =>
    cardType === 'navigation'
      ? css`
          text-decoration: none;
          &:hover {
            ${hoverWithBorder}
          }
          &:focus {
            ${focusVisibleWithBorder}
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

Card.displayName = 'Card';
