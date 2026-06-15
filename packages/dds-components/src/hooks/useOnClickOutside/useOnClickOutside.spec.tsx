import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useOnClickOutside } from './useOnClickOutside';

describe('useOnClickOutside', () => {
  let element: HTMLDivElement;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should call handler when clicking outside element', () => {
    const handler = vi.fn();
    const ref = { current: element };

    renderHook(() => useOnClickOutside(ref, handler));

    const outside = document.createElement('div');
    document.body.appendChild(outside);

    const event = new MouseEvent('mousedown', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: outside,
      enumerable: true,
    });

    document.dispatchEvent(event);

    expect(handler).toHaveBeenCalledWith(event);

    document.body.removeChild(outside);
  });

  it('should not call handler when clicking inside element', () => {
    const handler = vi.fn();
    const ref = { current: element };

    renderHook(() => useOnClickOutside(ref, handler));

    const event = new MouseEvent('mousedown', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: element,
      enumerable: true,
    });

    document.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });

  it('should handle multiple refs', () => {
    const handler = vi.fn();
    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    document.body.appendChild(element1);
    document.body.appendChild(element2);

    const refs = [{ current: element1 }, { current: element2 }];

    renderHook(() => useOnClickOutside(refs, handler));

    const outside = document.createElement('div');
    document.body.appendChild(outside);

    const event = new MouseEvent('mousedown', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: outside,
      enumerable: true,
    });

    document.dispatchEvent(event);

    expect(handler).toHaveBeenCalled();

    document.body.removeChild(outside);
    document.body.removeChild(element1);
    document.body.removeChild(element2);
  });

  it('should not call handler for children of multiple refs', () => {
    const handler = vi.fn();
    const element1 = document.createElement('div');
    const child = document.createElement('button');
    element1.appendChild(child);
    document.body.appendChild(element1);

    const refs = [{ current: element1 }];

    renderHook(() => useOnClickOutside(refs, handler));

    const event = new MouseEvent('mousedown', { bubbles: true });
    Object.defineProperty(event, 'target', { value: child, enumerable: true });

    document.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();

    document.body.removeChild(element1);
  });

  it('should handle null ref', () => {
    const handler = vi.fn();
    const ref = { current: null };

    renderHook(() => useOnClickOutside(ref, handler));

    const event = new MouseEvent('mousedown', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: document.body,
      enumerable: true,
    });

    document.dispatchEvent(event);

    expect(handler).toHaveBeenCalled();
  });

  it('should handle undefined ref', () => {
    const handler = vi.fn();

    renderHook(() => useOnClickOutside(undefined, handler));

    const event = new MouseEvent('mousedown', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: document.body,
      enumerable: true,
    });

    document.dispatchEvent(event);

    expect(handler).toHaveBeenCalled();
  });

  it('should remove listeners on unmount', () => {
    const handler = vi.fn();
    const ref = { current: element };

    const { unmount } = renderHook(() => useOnClickOutside(ref, handler));

    unmount();

    const event = new MouseEvent('mousedown', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: document.body,
      enumerable: true,
    });

    document.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });

  it('should handle click on element removed from DOM', () => {
    const handler = vi.fn();
    const element = document.createElement('div');
    document.body.appendChild(element);

    const ref = { current: element };

    renderHook(() => useOnClickOutside(ref, handler));

    document.body.removeChild(element);

    const event = new MouseEvent('mousedown', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: document.body,
      enumerable: true,
    });

    document.dispatchEvent(event);

    expect(handler).toHaveBeenCalled();
  });
});
