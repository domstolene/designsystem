import { forwardRef } from 'react';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import { BaseTypographyProps, Typography } from '../Typography';

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
        typographyType="headingSans03"
        as="caption"
      >
        {children}
      </Typography>
    );
  }
);

Caption.displayName = 'Caption';
