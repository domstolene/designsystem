import {
  type ComponentPropsWithRef,
  type ElementType,
  type PropsWithChildren,
} from 'react';

import { ElementAs } from '../../polymorphic';
import { Link } from '../Typography';
import { isLinkLike } from './Breadcrumbs.utils';

export type BreadcrumbProps<E extends ElementType = 'a'> = {
  as?: E;
} & PropsWithChildren<ComponentPropsWithRef<E>>;

export const Breadcrumb = <E extends ElementType = 'a'>({
  as: propAs = 'a',
  children,
  ...rest
}: BreadcrumbProps<E>) => {
  const as = !isLinkLike(rest) ? 'span' : propAs === 'a' ? Link : propAs;
  return (
    <ElementAs as={as} {...rest}>
      {children}
    </ElementAs>
  );
};

Breadcrumb.displayName = 'Breadcrumb';
