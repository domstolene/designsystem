import { type ChangeEvent, createContext, useContext } from 'react';

import { type Nullable } from '../../../types';

export interface RadioButtonGroupContextProps {
  disabled: boolean;
  readOnly: boolean;
  name?: string;
  value?: string | number | null;
  error: boolean;
  errorMessageId?: string;
  required: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButtonGroupContext =
  createContext<Nullable<RadioButtonGroupContextProps>>(null);

export const useRadioButtonGroup = () => {
  return useContext(RadioButtonGroupContext);
};
