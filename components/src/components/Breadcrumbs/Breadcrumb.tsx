import { forwardRef, AnchorHTMLAttributes } from 'react';

import { Typography, TypographyProps } from '../Typography';

export type BreadcrumbProps = TypographyProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const Breadcrumb = forwardRef<HTMLAnchorElement, BreadcrumbProps>(
  ({ children, href, ...rest }, ref) => {
    return href ? (
      <Typography {...rest} ref={ref} href={href} typographyType="a">
        {children}
      </Typography>
    ) : (
      <Typography {...rest} ref={ref} color="interactive">
        {children}
      </Typography>
    );
  }
);
