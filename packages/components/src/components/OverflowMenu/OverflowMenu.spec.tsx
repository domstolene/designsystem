import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import { OverflowMenu, OverflowMenuGroup } from '.';
import userEvent from '@testing-library/user-event';

const text = 'text';
const href = '#';

interface props {
  navItem?: { title: string; href: string };
  item?: { title: string; onClick?: () => void; href?: string };
  user?: { name: string; href?: string };
}

function TestComponent({ navItem, item, user }: props) {
  return (
    <OverflowMenuGroup>
      <Button />
      <OverflowMenu
        items={item ? [item] : undefined}
        navItems={navItem ? [navItem] : undefined}
        userProps={user ? user : undefined}
      />
    </OverflowMenuGroup>
  );
}

describe('<OverflowMenu />', () => {
  it('should display context menu item as button', () => {
    const item = { title: text, onClick: () => null };
    render(<TestComponent item={item} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
  it('should display context menu item as link', () => {
    const item = { title: text, href: href };
    render(<TestComponent item={item} />);
    const aElement = screen.getByText(text);
    expect(aElement).toBeInTheDocument();
    expect(aElement).toHaveAttribute('href', href);
  });
  it('should display nav menu item as link', () => {
    const navItem = { title: text, href: href };
    render(<TestComponent navItem={navItem} />);
    const aElement = screen.getByText(text);
    expect(aElement).toBeInTheDocument();
    expect(aElement).toHaveAttribute('href', href);
  });
  it('should display static username', () => {
    render(<TestComponent user={{ name: text }} />);
    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
  });
  it('should display username as link', () => {
    render(<TestComponent user={{ name: text, href: href }} />);
    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('href', href);
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

  it('should call onToggle event on button click', async () => {
    const event = vi.fn();
    render(
      <OverflowMenuGroup onToggle={event}>
        <Button />
        <OverflowMenu />
      </OverflowMenuGroup>,
    );

    const menuButton = screen.getByRole('button');
    await userEvent.click(menuButton);

    expect(event).toBeCalled();
  });

  it('should call onOpen event button click', async () => {
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

  it('should run onClick event from context menu', async () => {
    const event = vi.fn();
    const item = { title: text, onClick: event };
    render(<TestComponent item={item} />);

    const menuButton = screen.getByRole('button');
    await userEvent.click(menuButton);

    await userEvent.click(screen.getByRole('menuitem', { name: item.title }));

    expect(event).toHaveBeenCalled();
  });
  it('should hide menu after Esc keydown', async () => {
    render(<TestComponent />);
    const menuButton = screen.getByRole('button');
    await userEvent.click(menuButton!);
    const menuOpened = screen.getByRole('menu');
    expect(menuOpened).toHaveAttribute('aria-hidden', 'false');

    await userEvent.keyboard('[Escape]');

    const elQuery = screen.queryByRole('menu');
    expect(elQuery).not.toBeInTheDocument();
  });
});
