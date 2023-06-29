import { InputHTMLAttributes } from 'react';
import { SvgIcon } from '@norges-domstoler/dds-icons';
import { BaseComponentProps } from '@norges-domstoler/dds-core';
import { CheckboxPickedHTMLAttributes } from '../SelectionControl/Checkbox';

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
