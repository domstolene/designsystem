import { type ComponentProps } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { type BaseTypographyProps, Typography } from '../Typography';

export type CaptionProps = BaseComponentPropsWithChildren<
  HTMLTableCaptionElement,
  BaseTypographyProps,
  Omit<ComponentProps<'caption'>, 'color'>
>;

export const Caption = ({
  id,
  className,
  htmlProps,
  children,
  ...rest
}: CaptionProps) => {
  return (
    <Typography
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      typographyType="headingLarge"
      as="caption"
    >
      {children}
    </Typography>
  );
};

Caption.displayName = 'Caption';
