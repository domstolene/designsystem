import { Nullable } from '@norges-domstoler/dds-core';
import React, { useContext } from 'react';

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
