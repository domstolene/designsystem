import React, { useContext } from 'react';

export interface CheckboxGroup {
  error?: boolean;
  errorMessageId?: string;
  uniqueGroupId?: string;
  tipId?: string;
}

export const CheckboxGroupContext = React.createContext<
  Nullable<CheckboxGroup>
>(null);

export const useCheckboxGroup = () => {
  return useContext(CheckboxGroupContext);
};
