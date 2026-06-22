import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useCallbackRef } from './useCallbackRef';

describe('useCallbackRef', () => {
  it('should return a callback function', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useCallbackRef(callback, []));

    expect(typeof result.current).toBe('function');
  });

  it('should call the callback with correct arguments', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useCallbackRef(callback, []));

    result.current('arg1', 'arg2');

    expect(callback).toHaveBeenCalledWith('arg1', 'arg2');
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should always call the latest version of the callback', () => {
    const callback1 = vi.fn();
    const callback2 = vi.fn();

    const { result, rerender } = renderHook(
      ({ callback, deps }) => useCallbackRef(callback, deps),
      {
        initialProps: { callback: callback1, deps: [] },
      },
    );

    result.current('test');
    expect(callback1).toHaveBeenCalledWith('test');

    rerender({ callback: callback2, deps: [] });
    result.current('test2');

    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledWith('test2');
  });

  it('should handle undefined callback', () => {
    const { result } = renderHook(() => useCallbackRef(undefined, []));

    expect(() => result.current()).not.toThrow();
  });

  it('should handle multiple calls with different arguments', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useCallbackRef(callback, []));

    result.current(1);
    result.current('string');
    result.current({ obj: true });

    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenNthCalledWith(1, 1);
    expect(callback).toHaveBeenNthCalledWith(2, 'string');
    expect(callback).toHaveBeenNthCalledWith(3, { obj: true });
  });
});
