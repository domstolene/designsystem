import { InputHTMLAttributes } from 'react';
import { CheckboxPickedHTMLAttributes } from '../SelectionControl/Checkbox';
import { BaseComponentProps } from '../../types';
import { SvgIcon } from '../Icon/utils';

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
