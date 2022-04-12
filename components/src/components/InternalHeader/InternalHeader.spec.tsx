import { render, screen, fireEvent } from '@testing-library/react';
import { InternalHeader } from '.';

describe('<InternalHeader />', () => {
  it('should display application name', () => {
    const appName = 'appName';
    render(<InternalHeader applicationName={appName} />);
    const appNameElement = screen.getByText(appName);
    expect(appNameElement).toBeDefined();
  });

  it('should run onclick event from context menu', () => {
    const event = jest.fn();
    const element = {
      title: 'action',
      onClick: event
    };
    const { container } = render(
      <InternalHeader contextMenuElements={[element]} />
    );
    const contextMenuButton = container
      .querySelector('li')
      ?.querySelector('button');
    fireEvent.click(contextMenuButton!);
    expect(event).toHaveBeenCalled();
  });

  it('should have a link in navigation', () => {
    const href = '#';
    const element = {
      title: 'link',
      href: href
    };
    const { container } = render(
      <InternalHeader navigationElements={[element]} />
    );
    const navigationLink = container.querySelector('nav')?.querySelector('a');
    expect(navigationLink).toHaveAttribute('href', href);
  });

  it('should have a link in navigation with target attribute', () => {
    const href = '#';
    const target = '_blank';
    const element = {
      title: 'link',
      href: href,
      target: target
    };
    const { container } = render(
      <InternalHeader navigationElements={[element]} />
    );
    const navigationLink = container.querySelector('nav')?.querySelector('a');
    expect(navigationLink).toHaveAttribute('target', target);
  });

  it('should have a link in context menu', () => {
    const href = '#';
    const element = {
      title: 'link',
      href: href
    };
    const { container } = render(
      <InternalHeader contextMenuElements={[element]} />
    );
    const contextMenuLink = container.querySelector('li')?.querySelector('a');
    expect(contextMenuLink).toHaveAttribute('href', href);
  });
});
