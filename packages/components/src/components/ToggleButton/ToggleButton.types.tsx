import { type InputHTMLAttributes } from 'react';

import { type BaseComponentProps } from '../../types';
import { type SvgIcon } from '../Icon/utils';
import { type CheckboxPickedHTMLAttributes } from '../SelectionControl/Checkbox';

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
