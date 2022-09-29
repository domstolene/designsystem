import { forwardRef, LabelHTMLAttributes } from 'react';
import { RequiredMarker } from '../../../helpers';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { BaseTypographyProps, Typography } from '../Typography';

type PickedHTMLAttributes = Pick<
  LabelHTMLAttributes<HTMLLabelElement>,
  'htmlFor'
>;

type BaseLabelProps = {
  /** Spesifiserer om input etiketten er knyttet til er påkrevd; påvirker styling. */
  required?: boolean;
};

export type LabelProps = BaseComponentPropsWithChildren<
  HTMLLabelElement,
  BaseLabelProps & BaseTypographyProps & PickedHTMLAttributes,
  Omit<LabelHTMLAttributes<HTMLLabelElement>, keyof PickedHTMLAttributes>
>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { required, id, className, htmlProps, children, ...rest } = props;

  return (
    <Typography
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      ref={ref}
      typographyType="supportingStyleLabel01"
    >
      {children} {required && <RequiredMarker />}
    </Typography>
  );
});
