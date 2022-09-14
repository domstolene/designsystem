import { forwardRef, LabelHTMLAttributes } from 'react';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { BaseTypographyProps, Typography } from '../Typography';

type PickedHTMLAttributes = Pick<
  LabelHTMLAttributes<HTMLLabelElement>,
  'htmlFor'
>;

export type LabelProps = BaseComponentPropsWithChildren<
  HTMLLabelElement,
  BaseTypographyProps & PickedHTMLAttributes,
  Omit<LabelHTMLAttributes<HTMLLabelElement>, keyof PickedHTMLAttributes>
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
