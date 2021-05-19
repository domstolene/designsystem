import React, { ChangeEvent, useContext } from 'react';

export interface RadioButtonGroup {
  disabled?: boolean;
  name?: string;
  value: string | number | null;
  error?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButtonGroupContext = React.createContext<Nullable<RadioButtonGroup>>(
  null
);

export const useRadioButtonGroup = () => {
  return useContext(RadioButtonGroupContext);
};
