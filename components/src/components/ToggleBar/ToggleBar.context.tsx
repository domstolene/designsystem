import { createContext, useContext } from 'react';
import { ToggleBarSize } from './ToggleBar';

type ToggleBarContextType = {
  size: ToggleBarSize;
};

export const ToggleBarContext = createContext<ToggleBarContextType>({
  size: 'medium',
});

export const useToggleBarContext = () => useContext(ToggleBarContext);
