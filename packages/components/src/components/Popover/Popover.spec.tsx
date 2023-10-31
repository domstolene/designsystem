import { vi } from 'vitest';
import {
  screen,
  render,
  act,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { Popover, PopoverGroup } from '.';
import { Button } from '../Button';

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

describe('<Popover />', () => {
  it('should have aria-controls attribute on trigger element', () => {
    render(<TestComponent />);
    const triggerElement = screen.getByRole('button');
    expect(triggerElement).toHaveAttribute('aria-controls');
  });

  it('should have aria-haspopup attribute on trigger element', () => {
    render(<TestComponent />);
    const triggerElement = screen.getByRole('button');
    expect(triggerElement).toHaveAttribute('aria-haspopup', 'dialog');
  });

  it('should not be in DOM by default', () => {
    render(<TestComponent />);
    const element = screen.queryByText(content);
    expect(element).not.toBeInTheDocument();
    const popover = screen.queryByRole('dialog');
    expect(popover).not.toBeInTheDocument();
  });

  it('should open on click', () => {
    render(<TestComponent />);
    const button = screen.getByText(buttonLabel);

    act(() => {
      fireEvent.click(button);
    });

    const popover = screen.getByRole('dialog');
    expect(popover).toBeInTheDocument();
  });

  it('should render title when opened', () => {
    const title = 'title';
    render(
      <PopoverGroup>
        <Button>{buttonLabel}</Button>
        <Popover title={title} />
      </PopoverGroup>,
    );
    const button = screen.getByText(buttonLabel);

    act(() => {
      fireEvent.click(button);
    });

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('should render content when opened', () => {
    render(<TestComponent />);

    const button = screen.getByText(buttonLabel);

    act(() => {
      fireEvent.click(button);
    });

    const contentElement = screen.getByText(content);
    expect(contentElement).toBeInTheDocument();
  });

  it('should hide after close button click', async () => {
    render(<TestComponent />);
    const button = screen.getByText(buttonLabel);

    act(() => {
      button.click();
    });

    const el = await screen.findByRole('dialog');
    expect(el).toBeInTheDocument();
    const closeButton = screen.getByLabelText('Lukk');

    act(() => {
      fireEvent.click(closeButton!);
    });

    const elQuery = screen.queryByRole('dialog');
    await waitFor(() => {
      expect(elQuery).not.toBeInTheDocument();
    });
  });

  it('should run onclick event for closing button', () => {
    const event = vi.fn();
    render(
      <PopoverGroup isOpen onCloseButtonClick={event}>
        <Button />
        <Popover withCloseButton />
      </PopoverGroup>,
    );

    const closeButton = screen.getAllByRole('button')[1];

    act(() => {
      fireEvent.click(closeButton);
    });

    expect(event).toHaveBeenCalled();
  });

  it('should run onclick event for trigger element', () => {
    const event = vi.fn();
    render(
      <PopoverGroup onTriggerClick={event}>
        <Button />
        <Popover />
      </PopoverGroup>,
    );
    const triggerButton = screen.getByRole('button');
    act(() => {
      fireEvent.click(triggerButton);
    });
    expect(event).toHaveBeenCalled();
  });

  it('Esc press should close popover', async () => {
    render(<TestComponent />);
    const button = screen.getByText(buttonLabel);

    act(() => {
      button.click();
    });
    const popover = await screen.findByRole('dialog');
    expect(popover).toBeInTheDocument();

    act(() => {
      fireEvent.keyDown(popover, { key: 'Escape', code: 'Escape' });
    });

    const elQuery = screen.queryByRole('dialog');
    await waitFor(() => {
      expect(elQuery).not.toBeInTheDocument();
    });
  });
});
