import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useContext,
} from 'react';

import { type FloatingStyles, type UseFloatPositionOptions } from '../../hooks';

interface PopoverContextType {
  floatStyling: FloatingStyles;
  setFloatOptions: Dispatch<
    SetStateAction<UseFloatPositionOptions | undefined>
  >;
  floatingRef: (node: HTMLElement | null) => void;
  popoverId: string;
  anchorEl: HTMLElement;
  onClose: () => void;
  isOpen: boolean;
}

export const PopoverContext = createContext<Partial<PopoverContextType>>({});

export const usePopoverContext = () => useContext(PopoverContext);
