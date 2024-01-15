import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('<Card />', () => {
  it('should render content text', () => {
    const text = 'text';
    render(<Card cardType="info">{text}</Card>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should render an anchor element when cardType is navigation and href is provided', () => {
    render(
      <Card cardType="navigation" href="#">
        text
      </Card>,
    );
    const card = screen.getByRole('link');
    expect(card).toBeInTheDocument();
  });
});
