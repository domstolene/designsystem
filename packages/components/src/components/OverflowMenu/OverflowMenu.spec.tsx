import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../Button';

import {
  OverflowMenu,
  OverflowMenuButton,
  OverflowMenuGroup,
  OverflowMenuLink,
  OverflowMenuList,
  OverflowMenuSpan,
} from '.';

const text = 'text';
const href = '#';
const item = { children: text, onClick: () => null };
const link = { children: text, href: href };
interface props {
  link?: { children: string; href: string };
  item?: { children: string; onClick?: () => void };
  span?: { children: string };
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

describe('<OverflowMenu />', () => {
  it('should display context menu item as button', () => {
    render(<TestComponent item={item} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
  it('should display context menu item as link', () => {
    render(<TestComponent link={link} />);
    const aElement = screen.getByText(text);
    expect(aElement).toBeInTheDocument();
    expect(aElement).toHaveAttribute('href', href);
  });
  it('should display static username', () => {
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
    const item = { children: text, onClick: event };
    render(<TestComponent item={item} />);

    const menuButton = screen.getByRole('button');
    await userEvent.click(menuButton);

    await userEvent.click(screen.getByRole('menuitem', { name: text }));

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
