import { type ChangeEvent, createContext, useContext } from 'react';

import { type RadioValue } from './RadioButton.types';
import { type Nullable } from '../../../types';

export interface RadioButtonGroupContextProps {
  disabled: boolean;
  readOnly: boolean;
  name?: string;
  value?: RadioValue;
  defaultValue?: RadioValue;
  error: boolean;
  errorMessageId?: string;
  required: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>, v: RadioValue) => void;
}

export const RadioButtonGroupContext =
  createContext<Nullable<RadioButtonGroupContextProps>>(null);

export const useRadioButtonGroup = () => {
  return useContext(RadioButtonGroupContext);
};
