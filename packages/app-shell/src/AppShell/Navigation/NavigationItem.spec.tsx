import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { NavigationItem } from './NavigationItem';

const MockIcon = () => <div>Icon</div>;

describe('<AppShell.NavItem />', () => {
  it('should render internal nav item', () => {
    render(
      <NavigationItem href="#" icon={MockIcon}>
        Test
      </NavigationItem>,
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('should render external nav item', () => {
    render(
      <NavigationItem href="#" external>
        Test
      </NavigationItem>,
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should render polymorphic nav item with a string as polymorphic item', async () => {
    render(
      <>
        <NavigationItem href="#" icon={MockIcon}>
          Link
        </NavigationItem>
        <NavigationItem as="button" icon={MockIcon}>
          Button
        </NavigationItem>
      </>,
    );

    const link = await screen.findAllByRole('link');
    const button = await screen.findAllByRole('button');

    expect(link).toHaveLength(1);
    expect(button).toHaveLength(1);
  });
});
