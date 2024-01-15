import { vi, describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Drawer, DrawerGroup } from '.';
import { Button } from '../Button';

const buttonLabel = 'label';
const content = 'content';

const TestComponent = () => {
  return (
    <DrawerGroup>
      <Button>{buttonLabel}</Button>
      <Drawer>{content}</Drawer>
    </DrawerGroup>
  );
};

describe('<Drawer />', () => {
  it('should be hidden by default', () => {
    render(<TestComponent />);
    const element = screen.queryByText(content);
    expect(element).not.toBeInTheDocument();
    const drawer = screen.queryByRole('dialog');
    expect(drawer).not.toBeInTheDocument();
  });

  it('should open on click', async () => {
    render(<TestComponent />);
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const drawer = screen.getByRole('dialog');
    expect(drawer).toBeInTheDocument();
  });
  it('should render content when open', async () => {
    render(<TestComponent />);
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const element = screen.getByText(content);
    expect(element).toBeInTheDocument();
  });
  it('should hide after Esc keydown', async () => {
    render(<TestComponent />);
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const el = await screen.findByRole('dialog');
    expect(el).toBeInTheDocument();

    await userEvent.keyboard('[Escape]');

    const elQuery = screen.queryByRole('dialog');
    await waitFor(() => {
      expect(elQuery).not.toBeInTheDocument();
    });
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

  it('should call additional onClose event on click', async () => {
    const event = vi.fn();
    render(
      <DrawerGroup onClose={event}>
        <Button>{buttonLabel}</Button>
        <Drawer>{content}</Drawer>
      </DrawerGroup>,
    );
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const closeButton = await screen.findByTestId('drawer-close-btn');

    await userEvent.click(closeButton!);

    expect(event).toHaveBeenCalled();
  });
  it('should call additional onClose event on Esc keydown', async () => {
    const event = vi.fn();
    render(
      <DrawerGroup onClose={event}>
        <Button>{buttonLabel}</Button>
        <Drawer>{content}</Drawer>
      </DrawerGroup>,
    );
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const el = await screen.findByRole('dialog');
    expect(el).toBeInTheDocument();

    await userEvent.keyboard('[Escape]');

    expect(event).toHaveBeenCalled();
  });
  it('should call additional onOpen event on click', async () => {
    const event = vi.fn();
    render(
      <DrawerGroup onOpen={event}>
        <Button>{buttonLabel}</Button>
        <Drawer>{content}</Drawer>
      </DrawerGroup>,
    );
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    expect(event).toHaveBeenCalled();
  });
});
