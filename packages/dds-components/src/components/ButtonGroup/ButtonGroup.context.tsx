import { createContext, useContext } from 'react';

import { type ButtonSize } from '../Button/Button.types';

interface ButtonGroupContextType {
  size?: ButtonSize;
  purpose: 'secondary';
}

export const ButtonGroupContext = createContext<
  Partial<ButtonGroupContextType>
>({});

export const useButtonGroupContext = () => useContext(ButtonGroupContext);
