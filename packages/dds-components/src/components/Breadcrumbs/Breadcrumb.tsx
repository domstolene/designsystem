import {
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  forwardRef,
} from 'react';

import { Typography } from '../Typography';

export type BreadcrumbProps =
  | HTMLAttributes<HTMLSpanElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>;

const isAnchorTypographyProps = (
  props: BreadcrumbProps,
): props is AnchorHTMLAttributes<HTMLAnchorElement> => {
  return (props as AnchorHTMLAttributes<HTMLAnchorElement>).href != undefined;
};

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    if (isAnchorTypographyProps(props)) {
      return (
        <Typography htmlProps={rest} ref={ref} typographyType="a">
          {children}
        </Typography>
      );
    }

    return (
      <span {...rest} ref={ref}>
        {children}
      </span>
    );
  },
);

Breadcrumb.displayName = 'Breadcrumb';
