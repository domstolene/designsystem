import { forwardRef } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { type BaseTypographyProps, Typography } from '../Typography';

export type CaptionProps = BaseComponentPropsWithChildren<
  HTMLTableCaptionElement,
  BaseTypographyProps
>;

export const Caption = forwardRef<HTMLTableCaptionElement, CaptionProps>(
  (props, ref) => {
    const { id, className, htmlProps, children, ...rest } = props;

    return (
      <Typography
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        ref={ref}
        typographyType="headingLarge"
        as="caption"
      >
        {children}
      </Typography>
    );
  },
);

Caption.displayName = 'Caption';
