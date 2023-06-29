import { AnchorHTMLAttributes, forwardRef, HTMLAttributes } from 'react';

import { Typography } from '@norges-domstoler/dds-typography';

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
    const { children, ...rest } = props;

    if (isAnchorTypographyProps(props)) {
      return (
        <Typography htmlProps={rest} ref={ref} typographyType="a">
          {children}
        </Typography>
      );
    }

    return (
      <Typography htmlProps={rest} ref={ref} as="span" color="interactive">
        {children}
      </Typography>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';
