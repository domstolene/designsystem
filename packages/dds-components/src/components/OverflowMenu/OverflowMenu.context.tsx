import {
  type ReactNode,
  type RefObject,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useRoveFocus } from '../../hooks';

type FocusableElement = HTMLButtonElement | HTMLAnchorElement;

interface OverflowMenuContextProps {
  isOpen: boolean;
  onToggle?: () => void;
  onClose?: () => void;
  registerItem: (ref: RefObject<FocusableElement>) => void;
  unregisterItem: (ref: RefObject<FocusableElement>) => void;
  focusedRef?: RefObject<FocusableElement>;
}

const OverflowMenuContext = createContext<OverflowMenuContextProps>({
  isOpen: false,
  registerItem: () => null,
  unregisterItem: () => null,
});

export interface OverflowMenuContextProviderProps {
  isOpen: boolean;
  onToggle?: () => void;
  onClose?: () => void;
  children: ReactNode;
}

export function OverflowMenuContextProvider({
  isOpen,
  onToggle,
  onClose,
  children,
}: OverflowMenuContextProviderProps) {
  const [items, setItems] = useState<Array<RefObject<FocusableElement>>>([]);
  const [focusIndex] = useRoveFocus(items.length, isOpen);

  useEffect(() => {
    items[focusIndex]?.current?.focus();
  }, [focusIndex]);

  return (
    <OverflowMenuContext.Provider
      value={{
        isOpen,
        onToggle,
        onClose,
        registerItem: ref => setItems(prev => [...prev, ref]),
        unregisterItem: ref =>
          setItems(prev => prev.filter(item => item !== ref)),
        focusedRef: items[focusIndex],
      }}
    >
      {children}
    </OverflowMenuContext.Provider>
  );
}

export const useOverflowMenu = () => {
  return useContext(OverflowMenuContext);
};
