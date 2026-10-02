import { createContext, useContext } from 'react';

import { type Nullable } from '../../../types';
import { type SelectionControlSize } from '../common/SelectionControl.types';

export interface CheckboxGroupContextProps {
  error?: boolean;
  errorMessageId?: string;
  uniqueGroupId?: string;
  tipId?: string;
  disabled?: boolean;
  readOnly?: boolean;
  size?: SelectionControlSize;
}

export const CheckboxGroupContext =
  createContext<Nullable<CheckboxGroupContextProps>>(null);

export const useCheckboxGroup = () => {
  return useContext(CheckboxGroupContext);
};
