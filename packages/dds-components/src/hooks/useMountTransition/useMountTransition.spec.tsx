import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useMountTransition } from './useMountTransition';

describe('useMountTransition', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return false initially when not mounted', () => {
    const { result } = renderHook(() => useMountTransition(false, 500));

    expect(result.current).toBe(false);
  });

  it('should return true immediately when mounted', () => {
    const { result } = renderHook(() => useMountTransition(true, 500));

    expect(result.current).toBe(true);
  });

  it('should transition in when mounting', () => {
    const { result, rerender } = renderHook(
      ({ isMounted, delay }) => useMountTransition(isMounted, delay),
      {
        initialProps: { isMounted: false, delay: 500 },
      },
    );

    expect(result.current).toBe(false);

    rerender({ isMounted: true, delay: 500 });

    expect(result.current).toBe(true);
  });

  it('should wait for unmount delay before transitioning out', () => {
    const { result, rerender } = renderHook(
      ({ isMounted, delay }) => useMountTransition(isMounted, delay),
      {
        initialProps: { isMounted: true, delay: 500 },
      },
    );

    expect(result.current).toBe(true);

    rerender({ isMounted: false, delay: 500 });

    expect(result.current).toBe(true);

    act(() => {
      vi.advanceTimersByTime(499);
    });

    expect(result.current).toBe(true);

    act(() => {
      vi.advanceTimersByTime(1);
    });

    expect(result.current).toBe(false);
  });

  it('should respect unmount delay duration', () => {
    const { result, rerender } = renderHook(
      ({ isMounted, delay }) => useMountTransition(isMounted, delay),
      {
        initialProps: { isMounted: true, delay: 300 },
      },
    );

    rerender({ isMounted: false, delay: 300 });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe(false);
  });

  it('should handle delay changes during transition', () => {
    const { result, rerender } = renderHook(
      ({ isMounted, delay }) => useMountTransition(isMounted, delay),
      {
        initialProps: { isMounted: true, delay: 500 },
      },
    );

    rerender({ isMounted: false, delay: 500 });

    act(() => {
      vi.advanceTimersByTime(250);
    });

    rerender({ isMounted: false, delay: 300 });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Should have transitioned out based on new delay
    expect(result.current).toBe(false);
  });

  it('should work with zero delay', () => {
    const { result, rerender } = renderHook(
      ({ isMounted, delay }) => useMountTransition(isMounted, delay),
      {
        initialProps: { isMounted: true, delay: 0 },
      },
    );

    rerender({ isMounted: false, delay: 0 });

    act(() => {
      vi.advanceTimersByTime(0);
    });

    expect(result.current).toBe(false);
  });
});
