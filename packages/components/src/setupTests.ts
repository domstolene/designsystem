import '@testing-library/jest-dom';
import './test/mocks/ResizeObserver';
import './test/mocks/IntersectionObserver';
import { vi } from 'vitest';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
});

Object.defineProperty(window, 'scrollTo', { value: vi.fn() });
