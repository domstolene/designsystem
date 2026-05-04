import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { type CommonBlockTypographyProps, Typography } from '../Typography';

export type CaptionProps = BaseComponentPropsWithChildren<
  HTMLTableCaptionElement,
  CommonBlockTypographyProps
>;

export const Caption = ({
  id,
  className,
  style,
  htmlProps,
  children,
  ...rest
}: CaptionProps) => {
  return (
    <Typography
      {...getBaseHTMLProps(id, className, style, htmlProps, rest)}
      typographyType="headingLarge"
      as="caption"
    >
      {children}
    </Typography>
  );
};

Caption.displayName = 'Caption';
