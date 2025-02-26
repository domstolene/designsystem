import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

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

  it('should open on click', async () => {
    render(<TestComponent />);
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const popover = screen.getByRole('dialog');
    expect(popover).toBeInTheDocument();
  });

  it('should render header when opened', async () => {
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

  it('should render content when opened', async () => {
    render(<TestComponent />);

    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const contentElement = screen.getByText(content);
    expect(contentElement).toBeInTheDocument();
  });

  it('should hide after close button click', async () => {
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

  it('should run onOpen event', async () => {
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

  it('should run onClose event', async () => {
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

  it('Esc press should close popover', async () => {
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

  it('Anchor should get focus on open and Esc', async () => {
    render(<TestComponent />);
    const triggerButton = screen.getByRole('button');

    await userEvent.keyboard('[Tab]');
    await userEvent.keyboard('[Enter]');
    await userEvent.keyboard('[Escape]');

    expect(triggerButton).toHaveFocus();
  });
});
