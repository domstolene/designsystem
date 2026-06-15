import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ScreenSize, useScreenSize } from './useScreenSize';

function createMatchMedia(matchesByQuery: Record<string, boolean>) {
  return vi.fn((query: string) => ({
    matches: matchesByQuery[query] ?? false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

describe('useScreenSize', () => {
  beforeEach(() => {
    window.matchMedia = createMatchMedia({
      'only screen and (min-width: 1280px)': true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns Large by default with the default mock', () => {
    const { result } = renderHook(() => useScreenSize());

    expect(result.current).toBe(ScreenSize.Large);
  });

  it('returns XSmall when only the smallest breakpoint matches', () => {
    window.matchMedia = createMatchMedia({
      'only screen and (min-width: 1px)': true,
    });

    const { result } = renderHook(() => useScreenSize());

    expect(result.current).toBe(ScreenSize.XSmall);
  });

  it('returns Small when the small breakpoint is the first match', () => {
    window.matchMedia = createMatchMedia({
      'only screen and (min-width: 600px)': true,
      'only screen and (min-width: 1px)': true,
    });

    const { result } = renderHook(() => useScreenSize());

    expect(result.current).toBe(ScreenSize.Small);
  });

  it('returns Medium when the medium breakpoint is the first match', () => {
    window.matchMedia = createMatchMedia({
      'only screen and (min-width: 960px)': true,
      'only screen and (min-width: 600px)': true,
      'only screen and (min-width: 1px)': true,
    });

    const { result } = renderHook(() => useScreenSize());

    expect(result.current).toBe(ScreenSize.Medium);
  });

  it('returns XLarge when the largest breakpoint matches', () => {
    window.matchMedia = createMatchMedia({
      'only screen and (min-width: 1920px)': true,
      'only screen and (min-width: 1280px)': true,
      'only screen and (min-width: 960px)': true,
      'only screen and (min-width: 600px)': true,
      'only screen and (min-width: 1px)': true,
    });

    const { result } = renderHook(() => useScreenSize());

    expect(result.current).toBe(ScreenSize.XLarge);
  });

  it('updates when a resize event changes the matching breakpoint', () => {
    const matchesByQuery: Record<string, boolean> = {
      'only screen and (min-width: 1280px)': true,
    };

    window.matchMedia = createMatchMedia(matchesByQuery);

    const { result } = renderHook(() => useScreenSize());

    expect(result.current).toBe(ScreenSize.Large);

    matchesByQuery['only screen and (min-width: 1280px)'] = false;
    matchesByQuery['only screen and (min-width: 1920px)'] = true;

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe(ScreenSize.XLarge);
  });

  it('removes the resize listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useScreenSize());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function),
    );
  });
});
