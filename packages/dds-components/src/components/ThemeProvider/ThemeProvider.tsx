import { ddsTokens } from '@norges-domstoler/dds-design-tokens';
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

export type DdsTheme = keyof typeof ddsTokens;
const defaultTheme: DdsTheme = 'core';

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
 * Hook for å hente gjeldende tema og temanavn. Brukes inni ThemeProvider.
 *
 * @returns tema med JS-konstanter og navnet på temaet.
 */

export function useTheme() {
  const themeName = useContext(ThemeContext)?.theme;

  if (!themeName) {
    throw new Error('useTheme must be used inside a ThemeProvider');
  }

  const theme = ddsTokens[themeName];

  return { theme, themeName };
}
