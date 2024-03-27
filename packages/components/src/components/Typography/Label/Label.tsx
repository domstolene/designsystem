import { type LabelHTMLAttributes, forwardRef } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { RequiredMarker } from '../../helpers';
import { type BaseTypographyProps, Typography } from '../Typography';

type PickedHTMLAttributes = Pick<
  LabelHTMLAttributes<HTMLLabelElement>,
  'htmlFor'
>;

export interface BaseLabelProps {
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
