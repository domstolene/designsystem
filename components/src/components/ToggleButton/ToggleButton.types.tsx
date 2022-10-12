import { InputHTMLAttributes } from 'react';
import { SvgIcon } from '../../icons/utils';
import { BaseComponentProps } from '../../types';
import { PickedHTMLAttributes } from '../../types/PickedHTMLAttributes';

export type ToggleButtonProps = BaseComponentProps<
  HTMLInputElement,
  {
    /**Ledetekst for inputelementet. */
    label?: string;
    /** Ikon. */
    icon?: SvgIcon;
  } & PickedHTMLAttributes,
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof PickedHTMLAttributes>
>;
