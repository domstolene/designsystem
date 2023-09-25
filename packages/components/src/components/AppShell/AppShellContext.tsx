import {
  type ReactNode,
  type SetStateAction,
  type Dispatch,
  createContext,
  useState,
  useContext,
} from 'react';

type AppShellContextValues = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const AppShellContext = createContext<AppShellContextValues>({
  isOpen: false,
  setOpen: () => {},
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