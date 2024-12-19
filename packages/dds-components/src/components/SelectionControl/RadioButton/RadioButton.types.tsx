import { type InputHTMLAttributes } from 'react';

import { type BaseComponentPropsWithChildren } from '../../../types';
import { type SelectionControlCommonProps } from '../common/SelectionControl.types';

type PickedInputHTMLAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | 'name'
  | 'readOnly'
  | 'checked'
  | 'value'
  | 'required'
  | 'onChange'
  | 'aria-describedby'
>;

export type RadioButtonProps = BaseComponentPropsWithChildren<
  HTMLInputElement,
  SelectionControlCommonProps & PickedInputHTMLAttributes,
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof PickedInputHTMLAttributes>
>;

export type RadioValue = PickedInputHTMLAttributes['value'];
