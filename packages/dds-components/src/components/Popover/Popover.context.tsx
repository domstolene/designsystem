import { type Strategy } from '@floating-ui/react-dom';
import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useContext,
} from 'react';

import { type UseFloatPositionOptions } from '../../hooks';

interface PopoverContextType {
  floatStyling: { position: Strategy; top: number; left: number };
  setFloatOptions: Dispatch<
    SetStateAction<UseFloatPositionOptions | undefined>
  >;
  floatingRef: (node: HTMLElement | null) => void;
  popoverId: string;
}

export const PopoverContext = createContext<Partial<PopoverContextType>>({});

export const usePopoverContext = () => useContext(PopoverContext);
