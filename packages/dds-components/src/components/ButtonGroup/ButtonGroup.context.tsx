import { createContext, useContext } from 'react';

import { type ButtonPurpose, type ButtonSize } from '../Button/Button.types';

interface ButtonGroupContextType {
  size?: ButtonSize;
  purpose: Extract<ButtonPurpose, 'secondary'>;
}

export const ButtonGroupContext = createContext<
  Partial<ButtonGroupContextType>
>({});

export const useButtonGroupContext = () => useContext(ButtonGroupContext);
