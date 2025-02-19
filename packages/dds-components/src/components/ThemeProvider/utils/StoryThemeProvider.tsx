import { useEffect, useRef, useState } from 'react';

import { ThemeContext, type ThemeProviderProps } from '../ThemeProvider';

export function StoryThemeProvider({
  theme = 'core',
  children,
}: ThemeProviderProps) {
  const themeRef = useRef<HTMLDivElement>(null);

  const [element, setElement] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    setElement(themeRef.current);
  }, []);

  return (
    <div ref={themeRef}>
      <ThemeContext value={{ theme, el: element }}>{children}</ThemeContext>
    </div>
  );
}
