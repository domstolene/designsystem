import {
  type AnchorHTMLAttributes,
  type ComponentPropsWithoutRef,
  type ElementType,
} from 'react';

import { ElementAs } from '../../../polymorphic';
import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../types';
import { cn, getTextColor, isTextColor } from '../../../utils';
import { focusable } from '../../helpers/styling/focus.module.css';
import { Icon } from '../../Icon';
import { OpenExternalIcon } from '../../Icon/icons';
import {
  type BaseTypographyProps,
  type TypographyBodyType,
  getColorCn,
  getTypographyCn,
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
      /**Spesifiserer om lenken fører til et eksternt nettsted eller åpnes i nytt vindu. Påvirker styling og setter `target` prop. */
      external?: boolean;
      /**Om lenken kan få `:visited`-styling. */
      withVisited?: boolean;
      /**Spesifiserer typografistil basert på utvalget for brødtekst. Arver hvis ikke oppgitt. */
      typographyType?: TypographyBodyType;
    } & BaseTypographyProps &
      PickedHTMLAttributes,
    Omit<ComponentPropsWithoutRef<T>, keyof PickedHTMLAttributes | 'color'>
  >;

export const Link = <T extends ElementType = 'a'>({
  id,
  className,
  htmlProps,
  children,
  typographyType,
  withMargins,
  withVisited,
  external,
  target,
  style,
  color,
  as: propAs,
  ...rest
}: LinkProps<T>) => {
  const as = propAs ? propAs : 'a';
  return (
    <ElementAs
      as={as}
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          tgStyles.a,
          external && tgStyles['a--external'],
          withVisited && tgStyles['a--visited'],
          typographyType && tgStyles[getTypographyCn(typographyType)],
          typographyType &&
            withMargins &&
            tgStyles[`${getTypographyCn(typographyType)}--margins`],
          focusable,
          getColorCn(color),
        ),
        htmlProps,
        rest,
      )}
      rel="noopener noreferer"
      target={external ? '_blank' : target}
      style={{
        ...htmlProps?.style,
        ...style,
        color: color && !isTextColor(color) ? getTextColor(color) : undefined,
      }}
    >
      {children}
      {external && (
        <Icon
          iconSize="inherit"
          icon={OpenExternalIcon}
          className={tgStyles.svg}
        />
      )}
    </ElementAs>
  );
};

Link.displayName = 'Link';
