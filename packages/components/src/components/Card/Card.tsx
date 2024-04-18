import { type AnchorHTMLAttributes, type RefObject } from 'react';

import styles from './Card.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';
import typographyStyles from '../Typography/typographyStyles.module.css';

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

type ColorsHyphen =
  | 'filled-dark'
  | 'filled-light'
  | 'stroke-dark'
  | 'stroke-light';

const colorCns: { [k in CardColor]: ColorsHyphen } = {
  filledDark: 'filled-dark',
  strokeDark: 'stroke-dark',
  filledLight: 'filled-light',
  strokeLight: 'stroke-light',
};

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

  const classNames = cn(
    className,
    typographyStyles['body-sans-02'],
    styles.container,
    styles[`container--${colorCns[color]}`],
    cardType !== 'info' && styles[`container--${cardType}`],
  );

  if (cardType === 'navigation') {
    const { href, target } = props;

    return (
      <a
        {...getBaseHTMLProps(
          id,
          cn(classNames, focusStyles.focusable),
          htmlProps,
          rest,
        )}
        ref={cardRef}
        href={href}
        target={target}
      >
        {children}
      </a>
    );
  }

  return (
    <div {...getBaseHTMLProps(id, classNames, htmlProps, rest)} ref={cardRef}>
      {children}
    </div>
  );
};

Card.displayName = 'Card';
