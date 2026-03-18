import { type ChangeEvent, createContext, useContext } from 'react';

import {
  type ToggleBarPurpose,
  type ToggleBarSize,
  type ToggleBarValue,
} from './ToggleBar.types';

export interface ToggleBarContextType {
  size: ToggleBarSize;
  purpose: ToggleBarPurpose;
  name?: string;
  value?: ToggleBarValue;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ToggleBarContext = createContext<ToggleBarContextType>({
  size: 'medium',
  purpose: 'primary',
});

export const useToggleBarContext = () => useContext(ToggleBarContext);
