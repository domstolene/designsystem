import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useOnKeyDown } from './useOnKeyDown';

describe('useOnKeyDown', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should call handler when specified key is pressed', () => {
    const handler = vi.fn();
    renderHook(() => useOnKeyDown('Enter', handler));

    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    document.dispatchEvent(event);

    expect(handler).toHaveBeenCalledWith(event);
  });

  it('should not call handler for different key', () => {
    const handler = vi.fn();
    renderHook(() => useOnKeyDown('Enter', handler));

    const event = new KeyboardEvent('keydown', { key: 'Space' });
    document.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });

  it('should handle array of keys', () => {
    const handler = vi.fn();
    renderHook(() => useOnKeyDown(['Enter', 'Space'], handler));

    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    document.dispatchEvent(enterEvent);

    expect(handler).toHaveBeenCalledWith(enterEvent);

    const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
    Object.defineProperty(spaceEvent, 'key', {
      value: 'Space',
      enumerable: true,
    });
    document.dispatchEvent(spaceEvent);

    expect(handler).toHaveBeenCalledTimes(2);
  });

  it('should not call handler for keys not in array', () => {
    const handler = vi.fn();
    renderHook(() => useOnKeyDown(['Enter', 'Space'], handler));

    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });

  it('should remove listener on unmount', () => {
    const handler = vi.fn();
    const { unmount } = renderHook(() => useOnKeyDown('Enter', handler));

    unmount();

    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    document.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });

  it('should update handler when dependencies change', () => {
    const handler1 = vi.fn();
    const handler2 = vi.fn();

    const { rerender } = renderHook(
      ({ handler }) => useOnKeyDown('Enter', handler),
      {
        initialProps: { handler: handler1 },
      },
    );

    const event1 = new KeyboardEvent('keydown', { key: 'Enter' });
    document.dispatchEvent(event1);

    expect(handler1).toHaveBeenCalledTimes(1);

    rerender({ handler: handler2 });

    const event2 = new KeyboardEvent('keydown', { key: 'Enter' });
    document.dispatchEvent(event2);

    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple hook instances', () => {
    const handler1 = vi.fn();
    const handler2 = vi.fn();

    renderHook(() => useOnKeyDown('Enter', handler1));
    renderHook(() => useOnKeyDown('Space', handler2));

    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    document.dispatchEvent(enterEvent);

    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).not.toHaveBeenCalled();

    const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
    Object.defineProperty(spaceEvent, 'key', {
      value: 'Space',
      enumerable: true,
    });
    document.dispatchEvent(spaceEvent);

    expect(handler2).toHaveBeenCalledTimes(1);
  });
});
