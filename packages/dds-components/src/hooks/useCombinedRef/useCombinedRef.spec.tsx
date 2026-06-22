import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useCombinedRef } from './useCombinedRef';

describe('useCombinedRef', () => {
  it('should return a callback ref function', () => {
    const { result } = renderHook(() => useCombinedRef());

    expect(typeof result.current).toBe('function');
  });

  it('should set object refs', () => {
    const ref1: { current: HTMLElement | null } = { current: null };
    const ref2: { current: HTMLElement | null } = { current: null };
    const { result } = renderHook(() =>
      useCombinedRef<HTMLElement | null>(ref1, ref2),
    );

    const element = document.createElement('div');
    result.current(element);

    expect(ref1.current).toBe(element);
    expect(ref2.current).toBe(element);
  });

  it('should handle callback refs', () => {
    const callback1 = vi.fn();
    const callback2 = vi.fn();
    const { result } = renderHook(() =>
      useCombinedRef<HTMLDivElement | null>(callback1, callback2),
    );

    const element = document.createElement('div');
    result.current(element);

    expect(callback1).toHaveBeenCalledWith(element);
    expect(callback2).toHaveBeenCalledWith(element);
  });

  it('should handle mixed ref types', () => {
    const objectRef: { current: HTMLDivElement | null } = { current: null };
    const callbackRef = vi.fn();
    const { result } = renderHook(() =>
      useCombinedRef<HTMLDivElement | null>(objectRef, callbackRef),
    );

    const element = document.createElement('div');
    result.current(element);

    expect(objectRef.current).toBe(element);
    expect(callbackRef).toHaveBeenCalledWith(element);
  });

  it('should filter out undefined refs', () => {
    const ref1: { current: HTMLDivElement | null } = { current: null };
    const callbackRef = vi.fn();
    const { result } = renderHook(() =>
      useCombinedRef<HTMLDivElement | null>(ref1, undefined, callbackRef),
    );

    const element = document.createElement('div');
    result.current(element);

    expect(ref1.current).toBe(element);
    expect(callbackRef).toHaveBeenCalledWith(element);
  });

  it('should handle null as element', () => {
    const ref1: { current: HTMLDivElement | null } = {
      current: document.createElement('div'),
    };
    const { result } = renderHook(() =>
      useCombinedRef<HTMLDivElement | null>(ref1),
    );

    result.current(null);

    expect(ref1.current).toBeNull();
  });

  it('should work with no refs provided', () => {
    const { result } = renderHook(() => useCombinedRef());

    const element = document.createElement('div');
    expect(() => result.current(element)).not.toThrow();
  });

  it('should maintain same function reference across renders', () => {
    const ref1: { current: HTMLDivElement | null } = { current: null };
    const { result, rerender } = renderHook(() =>
      useCombinedRef<HTMLDivElement | null>(ref1),
    );

    const firstRef = result.current;
    rerender();

    expect(result.current).toBe(firstRef);
  });

  it('should update all refs when element changes', () => {
    const ref1: { current: HTMLElement | null } = { current: null };
    const ref2: { current: HTMLElement | null } = { current: null };
    const { result } = renderHook(() =>
      useCombinedRef<HTMLElement | null>(ref1, ref2),
    );

    const element1 = document.createElement('div');
    result.current(element1);

    const element2 = document.createElement('span');
    result.current(element2);

    expect(ref1.current).toBe(element2);
    expect(ref2.current).toBe(element2);
  });
});
