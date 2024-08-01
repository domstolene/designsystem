import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { InternalHeader } from '.';

describe('<InternalHeader>', () => {
  it('should display application name', () => {
    const appName = 'appName';
    render(<InternalHeader applicationName={appName} />);
    const appNameElement = screen.getByText(appName);
    expect(appNameElement).toBeInTheDocument();
  });

  it('should run onclick event from context menu', async () => {
    const event = vi.fn();
    const element = {
      title: 'action',
      onClick: event,
    };
    render(<InternalHeader contextMenuElements={[element]} />);
    const contextMenuButton = screen.getByRole('button');
    await userEvent.click(contextMenuButton!);
    const contextMenuLink = screen.getByRole('menuitem');
    await userEvent.click(contextMenuLink);
    expect(event).toHaveBeenCalled();
  });

  it('should have a link in navigation', () => {
    const href = '#';
    const element = {
      title: 'link',
      href: href,
    };
    render(<InternalHeader navigationElements={[element]} />);
    const navigationLink = screen.getByRole('link');
    expect(navigationLink).toHaveAttribute('href', href);
  });

  it('should have a link in navigation with target attribute', () => {
    const href = '#';
    const target = '_blank';
    const element = {
      title: 'link',
      href: href,
      target: target,
    };
    render(<InternalHeader navigationElements={[element]} />);
    const navigationLink = screen.getByRole('link');
    expect(navigationLink).toHaveAttribute('target', target);
  });

  it('should have a link in context menu', async () => {
    const href = '#';
    const title = 'title';
    const element = {
      title: title,
      href: href,
    };
    render(<InternalHeader contextMenuElements={[element]} />);

    const contextMenuButton = screen.getByRole('button');
    await userEvent.click(contextMenuButton);

    const contextMenuLink = screen.getByRole('menuitem');
    expect(contextMenuLink).toHaveAttribute('href', href);
  });

  it('should have a nav link in context menu', async () => {
    const href = '#';
    const title = 'title';
    const element = {
      title: title,
      href: href,
    };
    render(
      <InternalHeader
        navigationElements={[element]}
        smallScreenBreakpoint="xl"
      />,
    );
    const burgerButton = screen.getByRole('button');
    await userEvent.click(burgerButton);
    const navigationLink = screen.getByRole('menuitem', {
      name: element.title,
    });
    expect(navigationLink).toHaveAttribute('href', href);
  });

  it('should have a static username in context menu', () => {
    const name = 'name';
    const user = {
      name: name,
    };

    render(<InternalHeader userProps={user} />);
    const element = screen.getByText(name);
    expect(element).toBeInTheDocument();
  });

  it('should have a user link in context menu', () => {
    const name = 'name';
    const href = '#';
    const user = {
      name: name,
      href: href,
    };

    render(<InternalHeader userProps={user} />);
    const element = screen.getByText(name);
    expect(element).toHaveAttribute('href', href);
  });
});
