import { fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { useReturnFocusOnBlur } from './useReturnFocusOnBlur';

function ReturnFocusTestComponent({
  active,
  onBlur,
  triggerElement,
}: {
  active: boolean;
  onBlur: () => void;
  triggerElement?: HTMLElement | null;
}) {
  const ref = useReturnFocusOnBlur<HTMLDivElement>(
    active,
    onBlur,
    triggerElement,
  );

  return (
    <div ref={ref} data-testid="container" tabIndex={-1}>
      <button data-testid="first">First</button>
      <button data-testid="last">Last</button>
    </div>
  );
}

describe('useReturnFocusOnBlur', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('focuses the container when active', () => {
    const trigger = document.createElement('button');
    document.body.appendChild(trigger);

    const { getByTestId } = render(
      <ReturnFocusTestComponent
        active
        onBlur={vi.fn()}
        triggerElement={trigger}
      />,
    );

    expect(document.activeElement).toBe(getByTestId('container'));
  });

  it('does not focus the container when inactive', () => {
    const trigger = document.createElement('button');
    document.body.appendChild(trigger);
    const previousActiveElement = document.activeElement;

    render(
      <ReturnFocusTestComponent
        active={false}
        onBlur={vi.fn()}
        triggerElement={trigger}
      />,
    );

    expect(document.activeElement).toBe(previousActiveElement);
  });

  it('returns focus to the trigger on Tab from the last element', () => {
    const trigger = document.createElement('button');
    document.body.appendChild(trigger);
    const onBlur = vi.fn();

    const { getByTestId } = render(
      <ReturnFocusTestComponent
        active
        onBlur={onBlur}
        triggerElement={trigger}
      />,
    );

    getByTestId('last').focus();
    fireEvent.keyDown(getByTestId('container'), { key: 'Tab' });

    expect(document.activeElement).toBe(trigger);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('returns focus to the trigger on Shift+Tab from the first element', () => {
    const trigger = document.createElement('button');
    document.body.appendChild(trigger);
    const onBlur = vi.fn();

    const { getByTestId } = render(
      <ReturnFocusTestComponent
        active
        onBlur={onBlur}
        triggerElement={trigger}
      />,
    );

    getByTestId('first').focus();
    fireEvent.keyDown(getByTestId('container'), { key: 'Tab', shiftKey: true });

    expect(document.activeElement).toBe(trigger);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('does nothing for non-Tab keys', () => {
    const trigger = document.createElement('button');
    document.body.appendChild(trigger);
    const onBlur = vi.fn();

    const { getByTestId } = render(
      <ReturnFocusTestComponent
        active
        onBlur={onBlur}
        triggerElement={trigger}
      />,
    );

    getByTestId('last').focus();
    fireEvent.keyDown(getByTestId('container'), { key: 'Enter' });

    expect(document.activeElement).toBe(getByTestId('last'));
    expect(onBlur).not.toHaveBeenCalled();
  });

  it('does nothing when triggerElement is missing', () => {
    const onBlur = vi.fn();

    const { getByTestId } = render(
      <ReturnFocusTestComponent
        active
        onBlur={onBlur}
        triggerElement={undefined}
      />,
    );

    getByTestId('last').focus();
    fireEvent.keyDown(getByTestId('container'), { key: 'Tab' });

    expect(document.activeElement).toBe(getByTestId('last'));
    expect(onBlur).not.toHaveBeenCalled();
  });

  it('stops handling blur navigation when active becomes false', () => {
    const trigger = document.createElement('button');
    document.body.appendChild(trigger);
    const onBlur = vi.fn();

    const { getByTestId, rerender } = render(
      <ReturnFocusTestComponent
        active
        onBlur={onBlur}
        triggerElement={trigger}
      />,
    );

    rerender(
      <ReturnFocusTestComponent
        active={false}
        onBlur={onBlur}
        triggerElement={trigger}
      />,
    );

    getByTestId('last').focus();
    fireEvent.keyDown(getByTestId('container'), { key: 'Tab' });

    expect(document.activeElement).toBe(getByTestId('last'));
    expect(onBlur).not.toHaveBeenCalled();
  });
});
