import { createContext, useContext } from 'react';

import { type Nullable } from '../../../types';

export interface CheckboxGroupContextProps {
  error?: boolean;
  errorMessageId?: string;
  uniqueGroupId?: string;
  tipId?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export const CheckboxGroupContext =
  createContext<Nullable<CheckboxGroupContextProps>>(null);

export const useCheckboxGroup = () => {
  return useContext(CheckboxGroupContext);
};
