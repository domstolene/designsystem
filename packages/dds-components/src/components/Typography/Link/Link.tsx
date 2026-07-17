import { type AnchorHTMLAttributes, type ElementType } from 'react';

import { ElementAs } from '../../../polymorphic';
import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../types';
import { cn, getTextColor, isTextColor } from '../../../utils';
import { focusable } from '../../helpers/styling/focus.module.css';
import {
  type CommonInlineTypographyProps,
  type TypographyBodyType,
  getColorCn,
} from '../Typography';
import tgStyles from '../typographyStyles.module.css';

type PickedHTMLAttributes = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'onClick' | 'href' | 'target'
>;

export type LinkProps<T extends ElementType = 'a'> =
  PolymorphicBaseComponentProps<
    T,
    {
      /**Om lenken kan få `:visited`-styling. */
      withVisited?: boolean;
      /**Spesifiserer typografistil basert på utvalget for brødtekst. Arver hvis ikke oppgitt. */
      typographyType?: TypographyBodyType;
      /**
       * Tvinger komponenten til å behandle `as` som en anchor tag wrapper og forwarde anchor-spesifikke props (target, rel).
       * Bruk når custom `as` komponent wrapper en `<a>` tag.
       * */
      isAnchor?: boolean;
      /**Om styling for inline ikon skal gjelde.
       * Ikon kan legges inn som barn ved siden av teksten med `<Icon>`-komponent.
       * */
      withIconStyling?: boolean;
    } & CommonInlineTypographyProps &
      PickedHTMLAttributes
  >;

export const Link = <T extends ElementType = 'a'>({
  id,
  className,
  htmlProps,
  children,
  typographyType,
  withMargins,
  withVisited,
  style,
  color,
  as: propAs,
  isAnchor: propIsAnchor,
  withIconStyling,
  ...rest
}: LinkProps<T>) => {
  const as = propAs ? propAs : 'a';
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
        cn(
          className,
          tgStyles.a,
          withIconStyling && tgStyles['a--with-icon'],
          withVisited && tgStyles['a--visited'],
          typographyType && tgStyles[typographyType],
          typographyType &&
            withMargins &&
            tgStyles[`${typographyType}--margins`],
          focusable,
          getColorCn(color),
        ),
        {
          ...style,
          color: color && !isTextColor(color) ? getTextColor(color) : undefined,
        },
        htmlProps,
        rest,
      )}
      {...aProps}
    >
      {children}
    </ElementAs>
  );
};

Link.displayName = 'Link';
