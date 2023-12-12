import React, { useContext } from 'react';
import { Nullable } from '../../../types';

export interface CheckboxGroupContextProps {
  error?: boolean;
  errorMessageId?: string;
  uniqueGroupId?: string;
  tipId?: string;
}

export const CheckboxGroupContext =
  React.createContext<Nullable<CheckboxGroupContextProps>>(null);

export const useCheckboxGroup = () => {
  return useContext(CheckboxGroupContext);
};
