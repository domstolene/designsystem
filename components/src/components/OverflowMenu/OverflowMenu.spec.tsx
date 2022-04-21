import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../Button';
import { OverflowMenu, OverflowMenuGroup } from '.';

const text = 'text';
const href = '#';

type props = {
  navItem?: { title: string; href: string };
  item?: { title: string; onClick?: () => void; href?: string };
  user?: { name: string; href?: string };
};

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
    const item = { title: text, onClick: () => {} };
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
  it('should show OverflowMenu on button click', () => {
    render(<TestComponent />);
    const menu = screen.queryByRole('menu');
    expect(menu).not.toBeInTheDocument();
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton!);
    const menuOpened = screen.getByRole('menu');
    expect(menuOpened).toHaveAttribute('aria-hidden', 'false');
  });

  it('should call onToggle event on button click', () => {
    const event = jest.fn();
    render(
      <OverflowMenuGroup onToggle={event}>
        <Button />
        <OverflowMenu />
      </OverflowMenuGroup>
    );
    const menuButton = screen.getByRole('button');
    menuButton.click();
    expect(event).toBeCalled();
  });

  it('should call onOpen event button click', () => {
    const event = jest.fn();
    render(
      <OverflowMenuGroup onOpen={event}>
        <Button />
        <OverflowMenu />
      </OverflowMenuGroup>
    );
    const menuButton = screen.getByRole('button');
    menuButton.click();
    expect(event).toBeCalled();
  });

  it('should run onclick event from context menu', () => {
    const event = jest.fn();
    const item = { title: text, onClick: event };
    const { container } = render(<TestComponent item={item} />);
    const menuButton = container.querySelector('li')?.querySelector('button');
    fireEvent.click(menuButton!);
    expect(event).toHaveBeenCalled();
  });
  it('should hide menu after Esc keydown', () => {
    render(<TestComponent />);
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton!);
    const menuOpened = screen.getByRole('menu');
    expect(menuOpened).toHaveAttribute('aria-hidden', 'false');
    fireEvent.keyDown(menuOpened, { key: 'Escape', code: 'Escape' });
    const elQuery = screen.queryByRole('menu');
    expect(elQuery).not.toBeInTheDocument();
  });
});
