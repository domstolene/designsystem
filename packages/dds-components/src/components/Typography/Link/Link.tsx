import { type AnchorHTMLAttributes, forwardRef } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { focusable } from '../../helpers/styling/focus.module.css';
import { Icon } from '../../Icon';
import { OpenExternalIcon } from '../../Icon/icons';
import {
  type BaseTypographyProps,
  type TypographyBodyType,
  getTypographyCn,
} from '../Typography';
import typographyStyles from '../typographyStyles.module.css';

type PickedHTMLAttributes = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'onClick' | 'href' | 'target'
>;

export type LinkProps = BaseComponentPropsWithChildren<
  HTMLAnchorElement,
  {
    /**Spesifiserer om lenken fører til et eksternt nettsted eller åpnes i nytt vindu. Påvirker styling og setter `target` prop. */
    external?: boolean;
    /**Om lenken kan få `:visited`-styling. */
    withVisited?: boolean;
    /**Spesifiserer typografistil basert på utvalget for brødtekst. Arver hvis ikke oppgitt. */
    typographyType?: TypographyBodyType;
  } & BaseTypographyProps &
    PickedHTMLAttributes,
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof PickedHTMLAttributes>
>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    id,
    className,
    htmlProps,
    children,
    typographyType,
    withMargins,
    withVisited,
    external,
    target,
    ...rest
  } = props;

  return (
    <a
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          typographyStyles.a,
          external && typographyStyles['a--external'],
          withVisited && typographyStyles['a--visited'],
          typographyType && typographyStyles[getTypographyCn(typographyType)],
          typographyType &&
            withMargins &&
            typographyStyles[`${getTypographyCn(typographyType)}--margins`],
          focusable,
        ),
        htmlProps,
        rest,
      )}
      {...rest}
      ref={ref}
      rel="noopener noreferer"
      target={external ? '_blank' : target}
    >
      {children}
      {external && <Icon iconSize="inherit" icon={OpenExternalIcon} />}
    </a>
  );
});

Link.displayName = 'Link';
