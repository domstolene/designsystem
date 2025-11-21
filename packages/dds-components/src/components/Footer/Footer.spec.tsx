import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Footer } from './Footer';

describe('<Footer>', () => {
  it('renders footer', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
  it('renders children', () => {
    const text = 'text';
    render(<Footer>{text}</Footer>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
