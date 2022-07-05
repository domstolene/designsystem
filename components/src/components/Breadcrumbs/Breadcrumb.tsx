import { forwardRef } from 'react';

import {
  AnchorTypographyProps,
  Typography,
  TypographyProps
} from '../Typography';

export type BreadcrumbProps = TypographyProps;

const isAnchorTypographyProps = (
  props: BreadcrumbProps
): props is AnchorTypographyProps => {
  return (
    props.typographyType === 'a' ||
    (props as AnchorTypographyProps).href != undefined
  );
};

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  (props, ref) => {
    if (isAnchorTypographyProps(props)) {
      return <Typography {...props} ref={ref} typographyType="a" />;
    }

    return <Typography {...props} ref={ref} color="interactive" />;
  }
);
