import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './ThemeProvider.module.css';
import { cn } from '../../utils';

export type DdsTheme = 'core' | 'public';
const defaultTheme = 'core';

interface ThemeContextProps {
  theme: DdsTheme;
  el: HTMLDivElement | null;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

export interface ThemeProviderProps {
  /**
   * Elsa tema for applikasjonen.
   * @default "core"
   */
  theme?: DdsTheme;
  /**
   * Selve applikasjonen.
   */
  children?: ReactNode;
}

export function ThemeProvider({
  theme = defaultTheme,
  children,
}: ThemeProviderProps) {
  const themeRef = useRef<HTMLDivElement>(null);

  const [element, setElement] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    setElement(themeRef.current);
  }, []);

  return (
    <div
      ref={themeRef}
      className={cn(
        `dds-${theme}`,
        styles['global-variables'],
        styles['global-styles'],
        'dds-themed',
      )}
    >
      <ThemeContext.Provider value={{ theme, el: element }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}

/**
 * Hook for å hente gjeldende tema.
 *
 * @returns DdsTheme
 */
export function useTheme(): DdsTheme | undefined {
  return useContext(ThemeContext)?.theme;
}
