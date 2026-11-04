import { type ElementType } from 'react';

import styles from './Card.module.css';
import { type CardProps, type NavigationCardProps } from './Card.types';
import { ElementAs } from '../../polymorphic';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';

export const Card = <T extends ElementType = 'a'>(props: CardProps<T>) => {
  const {
    appearance = 'filled',
    cardType,
    className,
    ...propsWithoutVariants
  } = props;

  const classNames = cn(
    className,
    styles.container,
    styles[`container--${appearance}`],
    cardType !== 'info' && styles[`container--${cardType}`],
  );

  if (cardType === 'navigation') {
    const {
      cardRef,
      id,
      style,
      htmlProps,
      isAnchor: propIsAnchor,
      as: propAs,
      ...navigationRest
    } = propsWithoutVariants as Omit<
      NavigationCardProps<T>,
      'appearance' | 'cardType' | 'className'
    >;
    const as = propAs ?? 'a';
    const isAnchor = as === 'a' || propIsAnchor;

    const aProps = isAnchor
      ? {
          rel: 'noopener noreferrer',
        }
      : {};

    return (
      <ElementAs
        as={as}
        {...getBaseHTMLProps(
          id,
          cn(classNames, focusStyles.focusable),
          style,
          htmlProps,
          navigationRest,
        )}
        ref={cardRef}

        {...aProps}
      />
    );
  }

  const { cardRef, id, style, htmlProps, ...rest } = propsWithoutVariants;

  return (
    <div
      {...getBaseHTMLProps(id, classNames, style, htmlProps, rest)}
      ref={cardRef}
    />
  );
};

Card.displayName = 'Card';
