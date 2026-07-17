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
const defaultTheme: DdsTheme = 'core-light';

type SplitTheme<T extends string> = T extends `${infer Main}-${infer Mode}`
  ? { main: Main; mode: Mode }
  : never;

export type DdsThemeMain = SplitTheme<DdsTheme>['main'];
export type DdsThemeMode = SplitTheme<DdsTheme>['mode'];

export const ddsThemes = Object.keys(ddsTokens) as Array<DdsTheme>;
export const ddsThemeMains = new Set(
  ddsThemes.map(theme => theme.split('-')[0]),
) as Set<DdsThemeMain>;
export const ddsThemeModes = new Set(
  ddsThemes.map(theme => theme.split('-')[1]),
) as Set<DdsThemeMode>;

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
   * @default "core-light"
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
      <ThemeContext value={{ theme, el: element }}>{children}</ThemeContext>
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
    throw new Error(
      'useTheme must be used inside a ThemeProvider or DdsProvider',
    );
  }

  const theme = ddsTokens[themeName];

  return { theme, themeName };
}
