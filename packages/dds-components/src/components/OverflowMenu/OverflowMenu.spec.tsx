import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../Button';

import {
  OverflowMenu,
  OverflowMenuButton,
  type OverflowMenuButtonProps,
  OverflowMenuGroup,
  OverflowMenuLink,
  type OverflowMenuLinkProps,
  OverflowMenuList,
  OverflowMenuSpan,
  type OverflowMenuSpanProps,
} from '.';

const text = 'text';
const href = '#';
const item = { children: text, onClick: () => null };
const link = { children: text, href: href };
interface props {
  link?: OverflowMenuLinkProps;
  item?: OverflowMenuButtonProps;
  span?: OverflowMenuSpanProps;
}

function TestComponent({ link, item, span }: props) {
  return (
    <OverflowMenuGroup>
      <Button />
      <OverflowMenu>
        <OverflowMenuList>
          {link && <OverflowMenuLink {...link} />}
          {item && <OverflowMenuButton {...item} />}
          {span && <OverflowMenuSpan {...span} />}
        </OverflowMenuList>
      </OverflowMenu>
    </OverflowMenuGroup>
  );
}

describe('<OverflowMenu>', () => {
  it('renders context menu item as link', () => {
    render(<TestComponent link={link} />);
    const aElement = screen.getByText(text);
    expect(aElement).toBeInTheDocument();
    expect(aElement).toHaveAttribute('href', href);
  });
  it('renders static username', () => {
    render(<TestComponent span={{ children: text }} />);
    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
  });
  it('should show OverflowMenu on button click', async () => {
    render(<TestComponent />);
    const menu = screen.queryByRole('menu');
    expect(menu).not.toBeInTheDocument();
    const menuButton = screen.getByRole('button');

    await userEvent.click(menuButton!);

    const menuOpened = screen.getByRole('menu');
    expect(menuOpened).toHaveAttribute('aria-hidden', 'false');
  });

  it('calls onClose event on button click', async () => {
    const event = vi.fn();
    render(
      <OverflowMenuGroup onClose={event}>
        <Button />
        <OverflowMenu />
      </OverflowMenuGroup>,
    );

    const menuButton = screen.getByRole('button');
    await userEvent.click(menuButton);
    expect(event).not.toBeCalled();

    await userEvent.click(menuButton);
    expect(event).toBeCalled();
  });

  it('calls onOpen event button click', async () => {
    const event = vi.fn();
    render(
      <OverflowMenuGroup onOpen={event}>
        <Button />
        <OverflowMenu />
      </OverflowMenuGroup>,
    );

    const menuButton = screen.getByRole('button');
    await userEvent.click(menuButton);

    expect(event).toBeCalled();
  });

  it('hides menu after Esc keydown', async () => {
    render(<TestComponent />);
    const menuButton = screen.getByRole('button');
    await userEvent.click(menuButton!);
    const menuOpened = screen.getByRole('menu');
    expect(menuOpened).toHaveAttribute('aria-hidden', 'false');

    await userEvent.keyboard('[Escape]');

    const elQuery = screen.queryByRole('menu');
    expect(elQuery).not.toBeInTheDocument();
  });

  describe('<OverflowMenuButton>', () => {
    it('renders context menu item as button', () => {
      render(<TestComponent item={item} />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeInTheDocument();
    });

    it('calls onClick event from context menu', async () => {
      const event = vi.fn();
      const item = { children: text, onClick: event };
      render(<TestComponent item={item} />);

      const menuButton = screen.getByRole('button');
      await userEvent.click(menuButton);

      await userEvent.click(screen.getByRole('menuitem', { name: text }));

      expect(event).toHaveBeenCalled();
    });
    it('calls onClickAsync and close menu after it resolves', async () => {
      const asyncClick = vi.fn(() => Promise.resolve());
      render(
        <TestComponent item={{ children: text, onClickAsync: asyncClick }} />,
      );

      const menuButton = screen.getByRole('button');
      await userEvent.click(menuButton);

      const menuItem = screen.getByRole('menuitem', { name: text });
      await userEvent.click(menuItem);

      expect(asyncClick).toHaveBeenCalled(); // Wait for async operation to finish and menu to close

      await screen.findByRole('button');
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('keeps menu open while onClickAsync is pending', async () => {
      let resolveFn: () => void;
      const asyncClick = vi.fn(
        () =>
          new Promise<void>(resolve => {
            resolveFn = resolve;
          }),
      );

      render(
        <TestComponent item={{ children: text, onClickAsync: asyncClick }} />,
      );

      const menuButton = screen.getByRole('button');
      await userEvent.click(menuButton);

      const menu = screen.getByRole('menu');
      expect(menu).toBeInTheDocument();

      const menuItem = screen.getByRole('menuitem', { name: text });
      await userEvent.click(menuItem);
      expect(menu).toBeInTheDocument();

      await waitFor(() => {
        resolveFn!();
        expect(screen.queryByRole('menu')).not.toBeInTheDocument();
      });
    });

    it('disables button while loading from onClickAsync', async () => {
      let resolveFn: () => void;
      const asyncClick = vi.fn(
        () =>
          new Promise<void>(resolve => {
            resolveFn = resolve;
          }),
      );

      render(
        <TestComponent item={{ children: text, onClickAsync: asyncClick }} />,
      );

      const menuButton = screen.getByRole('button');
      await userEvent.click(menuButton);

      const menuItem = screen.getByRole('menuitem', { name: text });
      await userEvent.click(menuItem);

      expect(menuItem).toHaveAttribute('aria-disabled', 'true');

      await waitFor(() => {
        resolveFn!();
      });
    });
  });
});
