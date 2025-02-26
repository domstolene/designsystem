import type * as CSS from 'csstype';
import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useContext,
  useLayoutEffect,
} from 'react';

type Width = CSS.Properties['width'];

interface TabContextState {
  updateWidth: (index: number, width: Width) => void;
  removeTab: (index: number) => void;
}

const TabContext = createContext<TabContextState | null>(null);

interface TabWidthContextProviderProps {
  children: ReactNode;
  onChangeWidths: Dispatch<SetStateAction<Array<Width>>>;
}

export function TabWidthContextProvider({
  children,
  onChangeWidths,
}: TabWidthContextProviderProps) {
  return (
    <TabContext
      value={{
        updateWidth: (index, newWidth) => {
          onChangeWidths(prev => {
            const newValue = [...prev];
            newValue[index] = newWidth;
            return newValue;
          });
        },
        removeTab: index => {
          onChangeWidths(prev => {
            const newValue = [...prev];
            newValue.splice(index, 1);
            return newValue;
          });
        },
      }}
    >
      {children}
    </TabContext>
  );
}

export function useSetTabWidth(index: number, width: Width) {
  const context = useContext(TabContext);

  useLayoutEffect(() => {
    context?.updateWidth(index, width);
    return () => context?.removeTab(index);
  }, [index, width]);
}
