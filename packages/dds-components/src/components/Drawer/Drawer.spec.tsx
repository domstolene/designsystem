import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { portalRender } from '../../test.utils';
import { Button } from '../Button';

import { Drawer, DrawerGroup, type DrawerGroupProps } from '.';

const buttonLabel = 'label';
const content = 'content';

const TestComponent = (props: Omit<DrawerGroupProps, 'children'>) => {
  return (
    <DrawerGroup {...props}>
      <Button>{buttonLabel}</Button>
      <Drawer>{content}</Drawer>
    </DrawerGroup>
  );
};

describe('<Drawer>', () => {
  it('is hidden by default', () => {
    portalRender(<TestComponent />);
    const element = screen.queryByText(content);
    expect(element).not.toBeInTheDocument();
    const drawer = screen.queryByRole('dialog');
    expect(drawer).not.toBeInTheDocument();
  });

  it('opens on click', async () => {
    portalRender(<TestComponent />);
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const drawer = screen.getByRole('dialog');
    expect(drawer).toBeInTheDocument();
  });
  it('renders content when open', async () => {
    portalRender(<TestComponent />);
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const element = screen.getByText(content);
    expect(element).toBeInTheDocument();
  });
  it('hides after Esc keydown', async () => {
    portalRender(<TestComponent />);
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
  it('hides after close button click', async () => {
    portalRender(<TestComponent />);
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

  it('calls additional onClose event on click', async () => {
    const event = vi.fn();
    portalRender(<TestComponent onClose={event} />);
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const closeButton = screen.getByLabelText('Lukk');

    await userEvent.click(closeButton!);

    expect(event).toHaveBeenCalled();
  });
  it('calls additional onClose event on Esc keydown', async () => {
    const event = vi.fn();
    portalRender(<TestComponent onClose={event} />);
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    const el = await screen.findByRole('dialog');
    expect(el).toBeInTheDocument();

    await userEvent.keyboard('[Escape]');

    expect(event).toHaveBeenCalled();
  });
  it('calls additional onOpen event on click', async () => {
    const event = vi.fn();
    portalRender(<TestComponent onOpen={event} />);
    const button = screen.getByText(buttonLabel);

    await userEvent.click(button);

    expect(event).toHaveBeenCalled();
  });
});
