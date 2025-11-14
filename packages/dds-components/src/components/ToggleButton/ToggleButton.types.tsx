import { type InputHTMLAttributes } from 'react';

import { type BaseComponentProps, createSizes } from '../../types';
import { type SvgIcon } from '../Icon/utils';
import { type CheckboxPickedHTMLAttributes } from '../SelectionControl/Checkbox';

export const TOGGLE_BUTTON_SIZES = createSizes('xsmall', 'small');
export type ToggleButtonProps = BaseComponentProps<
  HTMLInputElement,
  {
    /**Ledetekst for inputelementet. */
    label?: string;
    /** Ikon. */
    icon?: SvgIcon;
    /**Størrelse.
     * @default 'small'
     */
    size?: (typeof TOGGLE_BUTTON_SIZES)[number];
  } & CheckboxPickedHTMLAttributes,
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    keyof CheckboxPickedHTMLAttributes | 'size'
  >
>;
