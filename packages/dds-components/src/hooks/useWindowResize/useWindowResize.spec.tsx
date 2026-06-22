import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useWindowResize } from './useWindowResize';

describe('useWindowResize', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should call handler when window resizes', () => {
    const handler = vi.fn();
    renderHook(() => useWindowResize(handler));

    const event = new Event('resize');
    window.dispatchEvent(event);

    expect(handler).toHaveBeenCalledWith(event);
  });

  it('should remove listener on unmount', () => {
    const handler = vi.fn();
    const { unmount } = renderHook(() => useWindowResize(handler));

    unmount();

    const event = new Event('resize');
    window.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });

  it('should update handler when dependencies change', () => {
    const handler1 = vi.fn();
    const handler2 = vi.fn();

    const { rerender } = renderHook(({ handler }) => useWindowResize(handler), {
      initialProps: { handler: handler1 },
    });

    const event1 = new Event('resize');
    window.dispatchEvent(event1);

    expect(handler1).toHaveBeenCalledTimes(1);

    rerender({ handler: handler2 });

    const event2 = new Event('resize');
    window.dispatchEvent(event2);

    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple resize events', () => {
    const handler = vi.fn();
    renderHook(() => useWindowResize(handler));

    for (let i = 0; i < 5; i++) {
      const event = new Event('resize');
      window.dispatchEvent(event);
    }

    expect(handler).toHaveBeenCalledTimes(5);
  });

  it('should handle multiple hook instances independently', () => {
    const handler1 = vi.fn();
    const handler2 = vi.fn();

    renderHook(() => useWindowResize(handler1));
    renderHook(() => useWindowResize(handler2));

    const event = new Event('resize');
    window.dispatchEvent(event);

    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).toHaveBeenCalledTimes(1);
  });

  it('should not be called for other events', () => {
    const handler = vi.fn();
    renderHook(() => useWindowResize(handler));

    const scrollEvent = new Event('scroll');
    window.dispatchEvent(scrollEvent);

    expect(handler).not.toHaveBeenCalled();
  });

  //   it('should handle rapid resize events', () => {
  //     const handler = vi.fn();
  //     renderHook(() => useWindowResize(handler));

  //     const events = Array(100)
  //       .fill(null)
  //       .map(() => new Event('resize'));
  //     events.forEach(event => window.dispatchEvent(event));

  //     expect(handler).toHaveBeenCalledTimes(100);
  //   });

  it('should provide correct event type', () => {
    const handler = vi.fn();
    renderHook(() => useWindowResize(handler));

    const event = new Event('resize');
    window.dispatchEvent(event);

    const receivedEvent = handler.mock.calls[0][0];
    expect(receivedEvent.type).toBe('resize');
  });
});
