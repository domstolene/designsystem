import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRef, useState } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Button } from '../Button';

import { Popover, PopoverGroup } from '.';

const buttonLabel = 'label';
const content = 'content';

const TestComponent = () => {
  return (
    <PopoverGroup>
      <Button>{buttonLabel}</Button>
      <Popover>{content}</Popover>
    </PopoverGroup>
  );
};

describe('<Popover>', () => {
  it('has aria-controls attribute on trigger element', () => {
    render(<TestComponent />);
    const triggerElement = screen.getByRole('button');
    expect(triggerElement).toHaveAttribute('aria-controls');
  });

  it('has aria-haspopup attribute on trigger element', () => {
    render(<TestComponent />);
    const triggerElement = screen.getByRole('button');
    expect(triggerElement).toHaveAttribute('aria-haspopup', 'dialog');
  });

  it('is not in DOM by default', () => {
    render(<TestComponent />);
    const element = screen.queryByText(content);
    expect(element).not.toBeInTheDocument();
    const popover = screen.queryByRole('dialog');
    expect(popover).not.toBeInTheDocument();
  });

  it('opens on click', async () => {
    render(<TestComponent />);
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const popover = screen.getByRole('dialog');
    expect(popover).toBeInTheDocument();
  });

  it('renders header when opened', async () => {
    const header = 'header';
    render(
      <PopoverGroup>
        <Button>{buttonLabel}</Button>
        <Popover header={header} />
      </PopoverGroup>,
    );
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const headerElement = screen.getByText(header);
    expect(headerElement).toBeInTheDocument();
  });

  it('renders content when opened', async () => {
    render(<TestComponent />);

    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const contentElement = screen.getByText(content);
    expect(contentElement).toBeInTheDocument();
  });

  it('hides after close button click', async () => {
    render(<TestComponent />);
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const el = await screen.findByRole('dialog');
    expect(el).toBeInTheDocument();
    const closeButton = screen.getByLabelText('Lukk');

    await userEvent.click(closeButton!);

    const elQuery = screen.queryByRole('dialog');
    await waitFor(() => {
      expect(elQuery).not.toBeInTheDocument();
    });
  });

  it('calls onOpen event', async () => {
    const event = vi.fn();
    render(
      <PopoverGroup onOpen={event}>
        <Button />
        <Popover />
      </PopoverGroup>,
    );
    const triggerButton = screen.getByRole('button');
    await userEvent.click(triggerButton);
    expect(event).toHaveBeenCalled();
  });

  it('calls onClose event', async () => {
    const event = vi.fn();
    render(
      <PopoverGroup onClose={event}>
        <Button />
        <Popover />
      </PopoverGroup>,
    );
    const triggerButton = screen.getByRole('button');
    await userEvent.click(triggerButton);
    expect(event).not.toHaveBeenCalled();
    await userEvent.click(triggerButton);
    expect(event).toHaveBeenCalled();
  });

  it('closes popover on Esc press', async () => {
    render(<TestComponent />);
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);
    const popover = await screen.findByRole('dialog');
    expect(popover).toBeInTheDocument();

    await userEvent.keyboard('[Escape]');

    const elQuery = screen.queryByRole('dialog');
    await waitFor(() => {
      expect(elQuery).not.toBeInTheDocument();
    });
  });

  it('anchor gets focus on open and Esc', async () => {
    render(<TestComponent />);
    const triggerButton = screen.getByRole('button');

    await userEvent.keyboard('[Tab]');
    await userEvent.keyboard('[Enter]');
    await userEvent.keyboard('[Escape]');

    expect(triggerButton).toHaveFocus();
  });

  it('hides on click outside', async () => {
    const user = userEvent.setup();
    render(
      <>
        <div data-testid="outside">Outside</div>
        <PopoverGroup isInitiallyOpen>
          <Button />
          <Popover />
        </PopoverGroup>
        ,
      </>,
    );

    expect(screen.queryByRole('dialog')).toBeInTheDocument();

    await user.click(screen.getByTestId('outside'));

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('scrolling behavior on focus', () => {
    // The popover used to get focus before it was positioned.
    // When used with `portal` and `returnFocusOnBlur`, the browser scrolled to where the portal was placed in the DOM (top of page).
    // It should wait for the popover to be positioned before focusing.

    const offset = 100;
    const expectedPosition = `${offset}px`;

    const spyOnPopoverPositionWhenFocusIsCalled = (): Array<string> => {
      const positions: Array<string> = [];
      vi.spyOn(HTMLElement.prototype, 'focus').mockImplementation(function (
        this: HTMLElement,
      ) {
        if (this.getAttribute('role') === 'dialog') {
          positions.push(this.style.top);
        }
      });
      return positions;
    };

    const WithPopoverGroup = () => (
      <PopoverGroup>
        <button type="button">{buttonLabel}</button>
        <Popover portal returnFocusOnBlur offset={offset}>
          {content}
        </Popover>
      </PopoverGroup>
    );

    const WithoutPopoverGroup = () => {
      const anchorRef = useRef<HTMLButtonElement>(null);
      const [isOpen, setIsOpen] = useState(false);
      return (
        <>
          <button type="button" ref={anchorRef} onClick={() => setIsOpen(true)}>
            {buttonLabel}
          </button>
          <Popover
            anchorRef={anchorRef}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            portal
            returnFocusOnBlur
            withCloseButton={false}
            offset={offset}
          >
            {content}
          </Popover>
        </>
      );
    };

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it.each([
      ['with PopoverGroup', WithPopoverGroup],
      ['without PopoverGroup', WithoutPopoverGroup],
    ])(
      '%s: popover is positioned before focus is called',
      async (_name, TestComponent) => {
        const user = userEvent.setup();
        const popoverPositions = spyOnPopoverPositionWhenFocusIsCalled();

        render(<TestComponent />);

        await user.click(screen.getByText(buttonLabel));

        await waitFor(() => {
          expect(popoverPositions.length).toBeGreaterThan(0);
        });

        for (const actualPosition of popoverPositions) {
          // Test should fail if `isPositioned` is removed from the `useReturnFocusOnBlur` condition inside `<Popover>`.
          expect(actualPosition).toBe(expectedPosition);
        }
      },
    );
  });
});
