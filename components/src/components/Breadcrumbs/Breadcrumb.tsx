import { AnchorHTMLAttributes, forwardRef, HTMLAttributes } from 'react';

import { Typography } from '../Typography';

export type BreadcrumbProps =
  | HTMLAttributes<HTMLSpanElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>;

const isAnchorTypographyProps = (
  props: BreadcrumbProps
): props is AnchorHTMLAttributes<HTMLAnchorElement> => {
  return (props as AnchorHTMLAttributes<HTMLAnchorElement>).href != undefined;
};

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  (props, ref) => {
    if (isAnchorTypographyProps(props)) {
      return <Typography htmlProps={props} ref={ref} typographyType="a" />;
    }

    return (
      <Typography htmlProps={props} ref={ref} as="span" color="interactive" />
    );
  }
);
