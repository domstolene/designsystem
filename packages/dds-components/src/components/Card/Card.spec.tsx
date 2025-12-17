import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Card } from '.';

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
});
