import { InputHTMLAttributes } from 'react';
import { SvgIcon } from '../../icons/utils';
import { BaseComponentProps } from '../../types';
import { CheckboxPickedHTMLAttributes } from '../../types/CheckboxPickedHTMLAttributes';

export type ToggleButtonProps = BaseComponentProps<
  HTMLInputElement,
  {
    /**Ledetekst for inputelementet. */
    label?: string;
    /** Ikon. */
    icon?: SvgIcon;
  } & CheckboxPickedHTMLAttributes,
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    keyof CheckboxPickedHTMLAttributes
  >
>;
