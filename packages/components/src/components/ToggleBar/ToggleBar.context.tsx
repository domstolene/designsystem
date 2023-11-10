import { ChangeEvent, createContext, useContext } from 'react';
import { ToggleBarSize, ToggleBarValue } from './ToggleBar.types';

export interface ToggleBarContextType {
  size: ToggleBarSize;
  name?: string;
  value?: ToggleBarValue;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ToggleBarContext = createContext<ToggleBarContextType>({
  size: 'medium',
});

export const useToggleBarContext = () => useContext(ToggleBarContext);
