import { type AnchorHTMLAttributes, type RefObject } from 'react';

import styles from './Card.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';

export type CardAppearance = 'filled' | 'border';

export type CardType = 'info' | 'navigation' | 'expandable';

type BaseCardProps<T extends HTMLElement> = BaseComponentPropsWithChildren<
  T,
  {
    /** Utseende på komponenten.
     * @default "filled"
     */
    appearance?: CardAppearance;

    /** Referanse til komponenten. */
    cardRef?: RefObject<T | null>;
  }
>;

export type InfoCardProps = BaseCardProps<HTMLDivElement> & {
  /** Spesifiserer funksjonalitet og formål med komponenten. **OBS!** ved `'navigation'` må `href` oppgis. */
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
    appearance = 'filled',
    cardType,
    cardRef,
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  const classNames = cn(
    className,
    styles.container,
    styles[`container--${appearance}`],
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
      />
    );
  }

  return (
    <div {...getBaseHTMLProps(id, classNames, htmlProps, rest)} ref={cardRef} />
  );
};

Card.displayName = 'Card';
