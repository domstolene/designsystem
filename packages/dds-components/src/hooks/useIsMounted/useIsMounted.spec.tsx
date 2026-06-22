import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useIsMounted } from './useIsMounted';

describe('useIsMounted', () => {
  it('should return a function', () => {
    const { result } = renderHook(() => useIsMounted());

    expect(typeof result.current).toBe('function');
  });

  it('should return true when mounted', () => {
    const { result } = renderHook(() => useIsMounted());

    expect(result.current()).toBe(true);
  });

  it('should return false after unmount', () => {
    const { result, unmount } = renderHook(() => useIsMounted());

    expect(result.current()).toBe(true);

    unmount();

    expect(result.current()).toBe(false);
  });
});
