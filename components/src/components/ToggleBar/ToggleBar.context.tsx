import { ChangeEvent, createContext, useContext } from 'react';
import { ToggleBarSize } from './ToggleBar';

export type ToggleBarContextType = {
  size: ToggleBarSize;
  name?: string;
  value?: string | number | null;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const ToggleBarContext = createContext<ToggleBarContextType>({
  size: 'medium',
});

export const useToggleBarContext = () => useContext(ToggleBarContext);
