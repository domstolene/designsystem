import { ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Card } from '.';

const ClientLink = ({ href, children, ...rest }: ComponentProps<'a'>) => (
  <a {...rest} href={href} data-testid="client-link">
    {children}
  </a>
);

describe('<Card>', () => {
  it('renders content text', () => {
    const text = 'text';
    render(<Card cardType="info">{text}</Card>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders an anchor element when cardType is navigation and href is provided', () => {
    render(
      <Card cardType="navigation" href="#">
        text
      </Card>,
    );
    const card = screen.getByRole('link');
    expect(card).toBeInTheDocument();
  });

  it('supports custom polymorphic link component for navigation cards', () => {
    render(
      <Card cardType="navigation" as={ClientLink} href="/sak/123">
        text
      </Card>,
    );

    const card = screen.getByTestId('client-link');
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute('href', '/sak/123');
  });
});
