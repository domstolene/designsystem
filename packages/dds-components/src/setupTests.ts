import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock ResizeObserver
class ResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

vi.stubGlobal('ResizeObserver', ResizeObserver);

// Mock IntersectionObserver
class IntersectionObserver {
  root: Element | Document | null = null;
  rootMargin = '';
  thresholds: ReadonlyArray<number> = [];
  scrollMargin: string = '';

  constructor(private callback: IntersectionObserverCallback) {}

  observe = vi.fn((element: Element) => {
    this.callback(
      [{ isIntersecting: true, target: element } as IntersectionObserverEntry],
      this,
    );
  });

  unobserve = vi.fn();
  disconnect = vi.fn();

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

vi.stubGlobal('IntersectionObserver', IntersectionObserver);

// Mock matchMedia
vi.stubGlobal('matchMedia', (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

// Mock scrollTo
vi.stubGlobal('scrollTo', vi.fn());

// Mock i18n
vi.mock('./i18n', () => ({
  useLanguage: () => 'nb',
  useTranslation: () => ({
    t: (text: Record<string, string>) => text['nb'],
    lang: 'nb',
  }),
  createTexts: (texts: Record<string, any>) => texts,
}));
