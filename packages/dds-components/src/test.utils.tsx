import {
  type RenderOptions,
  type RenderResult,
  render,
} from '@testing-library/react';
import { type ReactElement } from 'react';

import { ThemeProvider } from './components/ThemeProvider';

// Brukes når komponenten bruker React Portal og må dermed wrappes i ThemeProvider
export function portalRender(
  ui: ReactElement,
  options?: RenderOptions,
): RenderResult {
  return render(<ThemeProvider>{ui}</ThemeProvider>, options);
}
