import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

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
  afterEach(() => {
    vi.restoreAllMocks();
  });

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
  it('hides on click outside', async () => {
    const user = userEvent.setup();
    portalRender(
      <>
        <div data-testid="outside">Outside</div>
        <DrawerGroup isInitiallyOpen>
          <Button>{buttonLabel}</Button>
          <Drawer>{content}</Drawer>
        </DrawerGroup>
      </>,
    );

    expect(screen.queryByRole('dialog')).toBeInTheDocument();

    await user.click(screen.getByTestId('outside'));

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
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

  it('throws if used outside DdsProvider', () => {
    expect(() => render(<Drawer>{content}</Drawer>)).toThrow(
      'Drawer must be used within a DdsProvider',
    );
  });

  it('closes when clicking the backdrop', async () => {
    const user = userEvent.setup();
    portalRender(
      <DrawerGroup isInitiallyOpen>
        <Button>{buttonLabel}</Button>
        <Drawer withBackdrop>{content}</Drawer>
      </DrawerGroup>,
    );

    const dialog = screen.getByRole('dialog');
    const backdrop = dialog.parentElement;

    expect(backdrop).toBeInTheDocument();

    await user.click(backdrop!);

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('does not close when clicking inside the drawer with backdrop', async () => {
    const user = userEvent.setup();
    portalRender(
      <DrawerGroup isInitiallyOpen>
        <Button>{buttonLabel}</Button>
        <Drawer withBackdrop>{content}</Drawer>
      </DrawerGroup>,
    );

    const dialog = screen.getByRole('dialog');

    await user.click(dialog);

    expect(screen.queryByRole('dialog')).toBeInTheDocument();
  });

  it('locks and unlocks body when backdrop is enabled', async () => {
    const user = userEvent.setup();
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(150);
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(100);
    const scrollToSpy = vi
      .spyOn(window, 'scrollTo')
      .mockImplementation(() => undefined);

    Object.defineProperty(document.body, 'clientHeight', {
      configurable: true,
      value: 200,
    });

    portalRender(
      <DrawerGroup isInitiallyOpen>
        <Button>{buttonLabel}</Button>
        <Drawer withBackdrop>{content}</Drawer>
      </DrawerGroup>,
    );

    expect(document.body.style.position).toBe('fixed');
    expect(document.body.style.top).toBe('-150px');

    await user.click(screen.getByLabelText('Lukk'));

    await waitFor(() => {
      expect(document.body.style.position).toBe('');
      expect(document.body.style.top).toBe('');
    });

    expect(scrollToSpy).toHaveBeenCalledWith(0, 150);
  });
});
