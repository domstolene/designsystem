import React, { ChangeEvent, useContext } from 'react';

export interface RadioGroup {
  disabled?: boolean;
  name?: string;
  value: string | number | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroupContext = React.createContext<RadioGroup>(
  {} as RadioGroup
);

export const useRadioGroup = () => {
  return useContext(RadioGroupContext);
};
