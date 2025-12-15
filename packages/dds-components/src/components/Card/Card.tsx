import styles from './Card.module.css';
import { type CardProps } from './Card.types';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';

export const Card = (props: CardProps) => {
  const {
    appearance = 'filled',
    cardType,
    cardRef,
    id,
    className,
    style,
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
          style,
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
    <div
      {...getBaseHTMLProps(id, classNames, style, htmlProps, rest)}
      ref={cardRef}
    />
  );
};

Card.displayName = 'Card';
