import { type ComponentProps, type InputHTMLAttributes } from 'react';

import { type BaseComponentProps } from '../../../types';
import { type SelectionControlCommonProps } from '../common/SelectionControl.types';

export type CheckboxPickedHTMLAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | 'aria-describedby'
  | 'name'
  | 'checked'
  | 'defaultChecked'
  | 'value'
  | 'defaultValue'
  | 'onChange'
  | 'onBlur'
>;

export type CheckboxProps = BaseComponentProps<
  HTMLInputElement,
  SelectionControlCommonProps & {
    /**Brukes ved nøstet struktur der alle `<Checkbox>` som hører til en gruppe kan bli valgt ved å trykke på en forelder `<Checkbox>`.
     * Hvis enkelte `<Checkbox>` blir valgt men ikke alle, skal forelder `<Checkbox>` få tilstanden `indeterminate` - verken valgt eller ikke. */
    indeterminate?: boolean;
  } & CheckboxPickedHTMLAttributes &
    Pick<ComponentProps<'input'>, 'required'>,
  InputHTMLAttributes<HTMLInputElement>
>;
