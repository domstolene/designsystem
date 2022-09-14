import { forwardRef } from 'react';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { BaseTypographyProps, Typography } from '../Typography';

export type LabelProps = BaseComponentPropsWithChildren<
  HTMLLabelElement,
  BaseTypographyProps
>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { id, className, htmlProps, children, ...rest } = props;

  return (
    <Typography
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      ref={ref}
      typographyType="supportingStyleLabel01"
    >
      {children}
    </Typography>
  );
});
