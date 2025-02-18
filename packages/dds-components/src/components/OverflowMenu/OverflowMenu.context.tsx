import {
  type Dispatch,
  type ReactNode,
  type RefObject,
  type SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  type FloatingStyles,
  type UseFloatPositionOptions,
  useRoveFocus,
} from '../../hooks';

type FocusableElement = HTMLButtonElement | HTMLAnchorElement;

interface CommonContextProps {
  isOpen: boolean;
  onClose?: () => void;
  menuRef?: (node: HTMLElement | null) => void;
  menuId?: string;
  floatStyling?: FloatingStyles;
  setFloatOptions?: Dispatch<
    SetStateAction<UseFloatPositionOptions | undefined>
  >;
}
type OverflowMenuContextProps = CommonContextProps & {
  registerItem: (ref: RefObject<FocusableElement | null>) => void;
  unregisterItem: (ref: RefObject<FocusableElement | null>) => void;
  focusedRef?: RefObject<FocusableElement | null>;
};

export type OverflowMenuContextProviderProps = CommonContextProps & {
  children: ReactNode;
};

const OverflowMenuContext = createContext<OverflowMenuContextProps>({
  isOpen: false,
  registerItem: () => null,
  unregisterItem: () => null,
});

export function OverflowMenuContextProvider({
  children,
  ...rest
}: OverflowMenuContextProviderProps) {
  const [items, setItems] = useState<Array<RefObject<FocusableElement | null>>>(
    [],
  );
  const [focusIndex] = useRoveFocus(items.length, rest.isOpen);

  useEffect(() => {
    items[focusIndex]?.current?.focus();
  }, [focusIndex]);

  return (
    <OverflowMenuContext
      value={{
        ...rest,
        registerItem: ref => setItems(prev => [...prev, ref]),
        unregisterItem: ref =>
          setItems(prev => prev.filter(item => item !== ref)),
        focusedRef: items[focusIndex],
      }}
    >
      {children}
    </OverflowMenuContext>
  );
}

export const useOverflowMenuContext = () => {
  return useContext(OverflowMenuContext);
};
