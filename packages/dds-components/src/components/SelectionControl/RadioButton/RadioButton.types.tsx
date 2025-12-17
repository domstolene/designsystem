import { type InputHTMLAttributes } from 'react';

import { type BaseComponentProps } from '../../../types';
import { type SelectionControlCommonProps } from '../common/SelectionControl.types';

export type RadioPickedInputHTMLAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | 'name'
  | 'readOnly'
  | 'checked'
  | 'value'
  | 'required'
  | 'onChange'
  | 'aria-describedby'
>;

export type RadioButtonProps = BaseComponentProps<
  HTMLInputElement,
  SelectionControlCommonProps & RadioPickedInputHTMLAttributes
>;

export type RadioValue = RadioPickedInputHTMLAttributes['value'];
