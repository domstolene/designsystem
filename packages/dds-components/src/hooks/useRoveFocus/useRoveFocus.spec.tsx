import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useRoveFocus } from './useRoveFocus';

describe('useRoveFocus', () => {
  it('returns the focus index and setter', () => {
    const { result } = renderHook(() => useRoveFocus(3));

    expect(result.current).toHaveLength(2);
    expect(result.current[0]).toBe(-1);
    expect(typeof result.current[1]).toBe('function');
  });

  it('moves forward with ArrowDown in column mode', () => {
    const { result } = renderHook(() => useRoveFocus(3, true, 'column'));

    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowDown' }),
      );
    });

    expect(result.current[0]).toBe(0);
  });

  it('moves backward with ArrowUp in column mode', () => {
    const { result } = renderHook(() => useRoveFocus(3, true, 'column'));

    act(() => {
      result.current[1](2);
    });

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
    });

    expect(result.current[0]).toBe(1);
  });

  it('moves forward with ArrowRight in row mode', () => {
    const { result } = renderHook(() => useRoveFocus(3, true, 'row'));

    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowRight' }),
      );
    });

    expect(result.current[0]).toBe(0);
  });

  it('wraps to the beginning by default', () => {
    const { result } = renderHook(() => useRoveFocus(3, true, 'column'));

    act(() => {
      result.current[1](2);
    });

    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowDown' }),
      );
    });

    expect(result.current[0]).toBe(0);
  });

  it('does not wrap when noWrap is true', () => {
    const { result } = renderHook(() => useRoveFocus(3, true, 'column', true));

    act(() => {
      result.current[1](2);
    });

    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowDown' }),
      );
    });

    expect(result.current[0]).toBe(2);
  });

  it('does not move when inactive', () => {
    const { result } = renderHook(() => useRoveFocus(3, false, 'column'));

    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowDown' }),
      );
    });

    expect(result.current[0]).toBe(-1);
  });

  it('resets to -1 when active becomes false', () => {
    const { result, rerender } = renderHook(
      ({ active }) => useRoveFocus(3, active, 'column'),
      { initialProps: { active: true } },
    );

    act(() => {
      result.current[1](1);
    });

    rerender({ active: false });

    expect(result.current[0]).toBe(-1);
  });

  it('ignores arrow events when size is undefined', () => {
    const { result } = renderHook(() =>
      useRoveFocus(undefined, true, 'column'),
    );

    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowDown' }),
      );
    });

    expect(result.current[0]).toBe(-1);
  });

  it('ignores arrow events when size is 0', () => {
    const { result } = renderHook(() => useRoveFocus(0, true, 'column'));

    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowDown' }),
      );
    });

    expect(result.current[0]).toBe(-1);
  });
});
