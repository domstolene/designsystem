import { forwardRef, AnchorHTMLAttributes } from 'react';

import { Typography, TypographyProps } from '../Typography';

export type BreadcrumbProps = TypographyProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const Breadcrumb = forwardRef<HTMLAnchorElement, BreadcrumbProps>(
  ({ children, href, ...rest }, ref) => {
    return href ? (
      <Typography ref={ref} href={href} typographyType="a" {...rest}>
        {children}
      </Typography>
    ) : (
      <Typography ref={ref} color="interactive" {...rest}>
        {children}
      </Typography>
    );
  }
);
