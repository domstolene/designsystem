import { type RefObject, createContext, useContext } from 'react';

interface DrawerContextType {
  drawerId: string;
  triggerRef: RefObject<HTMLElement | null>;
  onClose: () => void;
  isOpen: boolean;
}

export const DrawerContext = createContext<Partial<DrawerContextType>>({});

export const useDrawerContext = () => useContext(DrawerContext);
