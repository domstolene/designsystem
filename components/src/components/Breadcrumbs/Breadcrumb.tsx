import { forwardRef, AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';
import { breadcrumbTokens as tokens } from './breadcrumbTokens';

import { Typography, TypographyProps } from '../Typography';

const LinklessItem = styled(Typography)`
  ${tokens.lastItem.base}
`;

export type BreadcrumbProps = {} & (TypographyProps &
  AnchorHTMLAttributes<HTMLAnchorElement>);

export const Breadcrumb = forwardRef<HTMLAnchorElement, BreadcrumbProps>(
  ({ children, href, ...rest }, ref) => {
    return href ? (
      <Typography ref={ref} href={href} typographyType="a" {...rest}>
        {children}
      </Typography>
    ) : (
      <LinklessItem ref={ref} {...rest}>
        {children}
      </LinklessItem>
    );
  }
);
