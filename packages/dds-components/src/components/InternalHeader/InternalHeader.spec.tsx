import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { InternalHeader } from '.';

const href = '#';
const children = 'link';
const link = {
  children,
  href,
};

describe('<InternalHeader>', () => {
  it('displays application name', () => {
    const appName = 'appName';
    render(<InternalHeader applicationName={appName} />);
    const appNameElement = screen.getByText(appName);
    expect(appNameElement).toBeInTheDocument();
  });

  it('calls onClick event from context menu', async () => {
    const event = vi.fn();
    const element = {
      children: 'action',
      onClick: event,
    };
    render(<InternalHeader contextMenuItems={[element]} />);
    const contextMenuButton = screen.getByRole('button');
    await userEvent.click(contextMenuButton!);
    const contextMenuLink = screen.getByRole('menuitem');
    await userEvent.click(contextMenuLink);
    expect(event).toHaveBeenCalled();
  });

  it('has a link in navigation', () => {
    render(<InternalHeader navItems={[link]} />);
    const navigationLink = screen.getByRole('link');
    expect(navigationLink).toHaveAttribute('href', href);
  });

  it('has a link in navigation with target attribute', () => {
    const target = '_blank';
    const element = {
      ...link,
      target: target,
    };
    render(<InternalHeader navItems={[element]} />);
    const navigationLink = screen.getByRole('link');
    expect(navigationLink).toHaveAttribute('target', target);
  });

  it('has a link in context menu', async () => {
    render(<InternalHeader contextMenuItems={[link]} />);

    const contextMenuButton = screen.getByRole('button');
    await userEvent.click(contextMenuButton);

    const contextMenuLink = screen.getByRole('menuitem');
    expect(contextMenuLink).toHaveAttribute('href', href);
  });

  it('has a nav link in context menu', async () => {
    render(<InternalHeader navItems={[link]} smallScreenBreakpoint="xl" />);
    const burgerButton = screen.getByRole('button');
    await userEvent.click(burgerButton);
    const navigationLink = screen.getByRole('menuitem', {
      name: children,
    });
    expect(navigationLink).toHaveAttribute('href', href);
  });

  it('has a static username in context menu', () => {
    const name = 'name';
    const user = {
      children: name,
    };

    render(<InternalHeader user={user} />);
    const element = screen.getByText(name);
    expect(element).toBeInTheDocument();
  });

  it('has a user link in context menu', () => {
    const name = 'name';
    const href = '#';
    const user = {
      children: name,
      href: href,
    };

    render(<InternalHeader user={user} />);
    const element = screen.getByText(name);
    expect(element).toHaveAttribute('href', href);
  });
});
