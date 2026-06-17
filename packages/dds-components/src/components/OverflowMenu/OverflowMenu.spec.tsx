import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { portalRender } from '../../test.utils';
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
  OverflowMenuToggle,
  type OverflowMenuToggleProps,
} from '.';

const text = 'text';
const href = '#';
const item = { children: text, onClick: () => null };
const link = { children: text, href: href };
interface props {
  link?: OverflowMenuLinkProps;
  item?: OverflowMenuButtonProps;
  span?: OverflowMenuSpanProps;
  toggle?: OverflowMenuToggleProps;
}

function TestComponent({ link, item, span, toggle }: props) {
  return (
    <OverflowMenuGroup>
      <Button />
      <OverflowMenu>
        <OverflowMenuList>
          {link && <OverflowMenuLink {...link} />}
          {item && <OverflowMenuButton {...item} />}
          {span && <OverflowMenuSpan {...span} />}
          {toggle && <OverflowMenuToggle {...toggle} />}
        </OverflowMenuList>
      </OverflowMenu>
    </OverflowMenuGroup>
  );
}

describe('<OverflowMenu>', () => {
  it('renders context menu item as link', () => {
    portalRender(<TestComponent link={link} />);
    const aElement = screen.getByText(text);
    expect(aElement).toBeInTheDocument();
    expect(aElement).toHaveAttribute('href', href);
  });
  it('renders static username', () => {
    portalRender(<TestComponent span={{ children: text }} />);
    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
  });
  it('should show OverflowMenu on button click', async () => {
    portalRender(<TestComponent />);
    const menu = screen.queryByRole('menu');
    expect(menu).not.toBeInTheDocument();
    const menuButton = screen.getByRole('button');

    await userEvent.click(menuButton!);

    const menuOpened = screen.getByRole('menu');
    expect(menuOpened).toHaveAttribute('aria-hidden', 'false');
  });

  it('calls onClose event on button click', async () => {
    const event = vi.fn();
    portalRender(
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
    portalRender(
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
    portalRender(<TestComponent />);
    const menuButton = screen.getByRole('button');
    await userEvent.click(menuButton!);
    const menuOpened = screen.getByRole('menu');
    expect(menuOpened).toHaveAttribute('aria-hidden', 'false');

    await userEvent.keyboard('[Escape]');

    const elQuery = screen.queryByRole('menu');
    expect(elQuery).not.toBeInTheDocument();
  });

  it('hides on click outside', async () => {
    const user = userEvent.setup();
    portalRender(
      <>
        <div data-testid="outside">Outside</div>
        <OverflowMenuGroup isInitiallyOpen>
          <Button />
          <OverflowMenu>
            <OverflowMenuList>
              <OverflowMenuButton />
            </OverflowMenuList>
          </OverflowMenu>
        </OverflowMenuGroup>
      </>,
    );

    expect(screen.queryByRole('menu')).toBeInTheDocument();

    await user.click(screen.getByTestId('outside'));

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('renders menu in portal by default', async () => {
    const { container } = portalRender(
      <div data-testid="host">
        <OverflowMenuGroup>
          <Button />
          <OverflowMenu />
        </OverflowMenuGroup>
      </div>,
    );

    await userEvent.click(screen.getByRole('button'));
    const menu = screen.getByRole('menu');
    const host = screen.getByTestId('host');
    expect(menu).toBeInTheDocument();
    expect(host.contains(menu)).toBe(false);
    expect(container.contains(menu)).toBe(true);
  });

  it('renders menu inline when portal is disabled', async () => {
    portalRender(
      <div data-testid="host">
        <OverflowMenuGroup>
          <Button />
          <OverflowMenu portal={false} />
        </OverflowMenuGroup>
      </div>,
    );

    await userEvent.click(screen.getByRole('button'));
    const menu = screen.getByRole('menu');
    const host = screen.getByTestId('host');
    expect(menu).toBeInTheDocument();
    expect(host.contains(menu)).toBe(true);
  });

  describe('<OverflowMenuButton>', () => {
    it('renders context menu item as button', () => {
      portalRender(<TestComponent item={item} />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeInTheDocument();
    });

    it('calls onClick event from context menu', async () => {
      const event = vi.fn();
      const item = { children: text, onClick: event };
      portalRender(<TestComponent item={item} />);

      const menuButton = screen.getByRole('button');
      await userEvent.click(menuButton);

      await userEvent.click(screen.getByRole('menuitem', { name: text }));

      expect(event).toHaveBeenCalled();
    });
    it('calls onClickAsync and close menu after it resolves', async () => {
      const asyncClick = vi.fn(() => Promise.resolve());
      portalRender(
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

      portalRender(
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

      portalRender(
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
  describe('<OverflowMenuToggle>', () => {
    it('renders toggle as menuitem', () => {
      portalRender(<TestComponent toggle={{ children: text }} />);
      const toggle = screen.getByRole('menuitem', { name: text, hidden: true });
      expect(toggle).toBeInTheDocument();
    });
    it('changes toggle state on click', async () => {
      const user = userEvent.setup();
      portalRender(<TestComponent toggle={{ children: text }} />);
      const toggle = screen.getByRole('menuitem', { name: text, hidden: true });
      expect(toggle).not.toBeChecked();
      await user.click(toggle);
      expect(toggle).toBeChecked();
    });
    it('does not close menu on toggle click', async () => {
      const user = userEvent.setup();
      portalRender(<TestComponent toggle={{ children: text }} />);
      const menuButton = screen.getByRole('button');
      await user.click(menuButton);

      const menuOpened = screen.getByRole('menu');
      expect(menuOpened).toHaveAttribute('aria-hidden', 'false');

      const toggle = screen.getByRole('menuitem', { name: text, hidden: true });
      await user.click(toggle);
      expect(menuOpened).toHaveAttribute('aria-hidden', 'false');
    });
  });
});
