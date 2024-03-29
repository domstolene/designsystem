import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface AppShellContextValues {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AppShellContext = createContext<AppShellContextValues>({
  isOpen: false,
  setOpen: () => null,
});

export const AppShellContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <AppShellContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </AppShellContext.Provider>
  );
};

export const useAppShellContext = () => {
  return useContext(AppShellContext);
};
