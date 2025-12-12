import { type ComponentPropsWithRef, type Ref } from 'react';

import { Link } from '../Typography';

export type BreadcrumbProps =
  | ComponentPropsWithRef<'a'>
  | ComponentPropsWithRef<'span'>;

export const isAnchorTypographyProps = (
  props: BreadcrumbProps,
): props is ComponentPropsWithRef<'a'> => {
  return (props as ComponentPropsWithRef<'a'>).href != undefined;
};

export const Breadcrumb = ({ children, ref, ...rest }: BreadcrumbProps) => {
  if (isAnchorTypographyProps(rest)) {
    return (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        htmlProps={rest}
        href={rest.href}
      >
        {children}
      </Link>
    );
  }
  return (
    <span ref={ref} {...rest}>
      {children}
    </span>
  );
};

Breadcrumb.displayName = 'Breadcrumb';
