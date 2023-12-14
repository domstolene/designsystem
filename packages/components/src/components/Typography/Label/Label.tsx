import { forwardRef, LabelHTMLAttributes } from 'react';
import { BaseTypographyProps, Typography } from '../Typography';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { RequiredMarker } from '../../helpers';

type PickedHTMLAttributes = Pick<
  LabelHTMLAttributes<HTMLLabelElement>,
  'htmlFor'
>;

interface BaseLabelProps {
  /** Spesifiserer om input etiketten er knyttet til er påkrevd; påvirker styling. */
  showRequiredStyling?: boolean;
}

export type LabelProps = BaseComponentPropsWithChildren<
  HTMLLabelElement,
  BaseLabelProps & BaseTypographyProps & PickedHTMLAttributes,
  Omit<LabelHTMLAttributes<HTMLLabelElement>, keyof PickedHTMLAttributes>
>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { showRequiredStyling, id, className, htmlProps, children, ...rest } =
    props;

  return (
    <Typography
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      ref={ref}
      typographyType="supportingStyleLabel01"
    >
      {children} {showRequiredStyling && <RequiredMarker />}
    </Typography>
  );
});

Label.displayName = 'Label';
