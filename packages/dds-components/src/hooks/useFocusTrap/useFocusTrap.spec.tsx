import { fireEvent, render } from '@testing-library/react';
import { type RefObject, createRef } from 'react';
import { userEvent } from 'storybook/test';
import { afterEach, describe, expect, it } from 'vitest';

import { useFocusTrap } from './useFocusTrap';

function FocusTrapTestComponent({
  active,
  initialFocusRef,
}: {
  active: boolean;
  initialFocusRef?: RefObject<HTMLElement | null>;
}) {
  const ref = useFocusTrap<HTMLDivElement>(active, initialFocusRef);

  return (
    <div ref={ref} data-testid="container">
      <button data-testid="first">First</button>
      <button data-testid="middle">Middle</button>
      <button data-testid="last">Last</button>
    </div>
  );
}

function FocusTrapTestComponentInitialFocus({
  active,
  initialFocusRef,
}: {
  active: boolean;
  initialFocusRef?: RefObject<HTMLButtonElement | null>;
}) {
  const ref = useFocusTrap<HTMLDivElement>(active, initialFocusRef);

  return (
    <div ref={ref} data-testid="container">
      <button data-testid="first">First</button>
      <button data-testid="middle" ref={initialFocusRef}>
        Middle
      </button>
      <button data-testid="last">Last</button>
    </div>
  );
}

describe('useFocusTrap', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('focuses the container when active and no initial focus ref is provided', () => {
    const { getByTestId } = render(<FocusTrapTestComponent active />);

    expect(document.activeElement).toBe(getByTestId('container'));
  });

  it('focuses the initial element when provided', () => {
    const initialFocusRef = createRef<HTMLButtonElement>();

    const { getByTestId } = render(
      <FocusTrapTestComponentInitialFocus
        active
        initialFocusRef={initialFocusRef}
      />,
    );

    expect(document.activeElement).toBe(getByTestId('middle'));
  });

  it('does not focus the initial element if it is outside the container', () => {
    const initialFocusRef = createRef<HTMLButtonElement>();

    const { getByTestId } = render(
      <div>
        <FocusTrapTestComponent active initialFocusRef={initialFocusRef} />
        <button ref={initialFocusRef} data-testid="external-focus">
          External
        </button>
      </div>,
    );

    expect(document.activeElement).not.toBe(getByTestId('external-focus'));
  });

  it('does not focus the container when inactive', () => {
    const previousActiveElement = document.activeElement;

    render(<FocusTrapTestComponent active={false} />);

    expect(document.activeElement).toBe(previousActiveElement);
  });

  it('moves focus to the middle element on Tab from the first element', async () => {
    const { getByTestId } = render(<FocusTrapTestComponent active />);
    const first = getByTestId('first');
    const middle = getByTestId('middle');

    first.focus();
    await userEvent.tab();

    expect(document.activeElement).toBe(middle);
  });

  it('loops focus to the first element on Tab from the last element', () => {
    const { getByTestId } = render(<FocusTrapTestComponent active />);
    const first = getByTestId('first');
    const last = getByTestId('last');

    last.focus();
    fireEvent.keyDown(document, { key: 'Tab' });

    expect(document.activeElement).toBe(first);
  });

  it('loops focus to the last element on Shift+Tab from the first element', () => {
    const { getByTestId } = render(<FocusTrapTestComponent active />);
    const first = getByTestId('first');
    const last = getByTestId('last');

    first.focus();
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });

    expect(document.activeElement).toBe(last);
  });

  it('does nothing for non-Tab keys', () => {
    const { getByTestId } = render(<FocusTrapTestComponent active />);
    const first = getByTestId('first');

    first.focus();
    fireEvent.keyDown(document, { key: 'Enter' });

    expect(document.activeElement).toBe(first);
  });

  it('stops trapping when active becomes false', () => {
    const { getByTestId, rerender } = render(<FocusTrapTestComponent active />);
    const last = getByTestId('last');

    rerender(<FocusTrapTestComponent active={false} />);

    last.focus();
    fireEvent.keyDown(document, { key: 'Tab' });

    expect(document.activeElement).toBe(last);
  });
});
