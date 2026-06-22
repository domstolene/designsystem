import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useControllableState } from './useControllableState';

describe('useControllableState', () => {
  it('should use default value when uncontrolled', () => {
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: 'default' }),
    );

    expect(result.current[0]).toBe('default');
  });

  it('should use function as default value', () => {
    const defaultFactory = vi.fn(() => 'from factory');
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: defaultFactory }),
    );

    expect(result.current[0]).toBe('from factory');
  });

  it('should update state when uncontrolled', () => {
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: 'initial' }),
    );

    act(() => {
      result.current[1]('updated');
    });

    expect(result.current[0]).toBe('updated');
  });

  it('should use controlled value', () => {
    const { result } = renderHook(() =>
      useControllableState({ value: 'controlled' }),
    );

    expect(result.current[0]).toBe('controlled');
  });

  it('should respect controlled value updates', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useControllableState({ value }),
      {
        initialProps: { value: 'controlled1' },
      },
    );

    expect(result.current[0]).toBe('controlled1');

    rerender({ value: 'controlled2' });
    expect(result.current[0]).toBe('controlled2');
  });

  it('should call onChange when state updates in uncontrolled mode', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useControllableState({
        defaultValue: 'initial',
        onChange,
      }),
    );

    act(() => {
      result.current[1]('updated');
    });

    expect(onChange).toHaveBeenCalledWith('updated');
  });

  it('should call onChange when controlled value changes', () => {
    const onChange = vi.fn();
    renderHook(
      ({ value }) =>
        useControllableState({
          value,
          onChange,
        }),
      {
        initialProps: { value: 'initial' },
      },
    );

    expect(onChange).not.toHaveBeenCalled();
  });

  it('should handle function updates', () => {
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: 5 }),
    );

    act(() => {
      result.current[1](prev => prev + 1);
    });

    expect(result.current[0]).toBe(6);
  });

  it('should handle switching from uncontrolled to controlled', () => {
    const props: { value: string | undefined } = { value: undefined };
    const { result, rerender } = renderHook(() =>
      useControllableState({ defaultValue: 'default', value: props.value }),
    );

    expect(result.current[0]).toBe('default');

    props.value = 'controlled';
    rerender();
    expect(result.current[0]).toBe('controlled');
  });

  it('should still call onChange in controlled mode', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useControllableState({
        value: 'controlled',
        onChange,
      }),
    );

    act(() => {
      result.current[1]('newValue');
    });

    expect(onChange).toHaveBeenCalledWith('newValue');
  });

  it('should not update internal state when controlled', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useControllableState({ value }),
      {
        initialProps: { value: 'value1' },
      },
    );

    act(() => {
      result.current[1]('attempt');
    });

    expect(result.current[0]).toBe('value1');

    rerender({ value: 'value2' });
    expect(result.current[0]).toBe('value2');
  });

  it('should work with different types', () => {
    const { result: resultNumber } = renderHook(() =>
      useControllableState({ defaultValue: 42 }),
    );
    expect(resultNumber.current[0]).toBe(42);

    const { result: resultBoolean } = renderHook(() =>
      useControllableState({ defaultValue: true }),
    );
    expect(resultBoolean.current[0]).toBe(true);

    const { result: resultObject } = renderHook(() =>
      useControllableState({ defaultValue: { key: 'value' } }),
    );
    expect(resultObject.current[0]).toEqual({ key: 'value' });
  });
});
