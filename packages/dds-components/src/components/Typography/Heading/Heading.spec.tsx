import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Heading } from './Heading';

describe('<Heading>', () => {
  it('renders text', () => {
    const text = 'text';
    render(<Heading level={1}>{text}</Heading>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders heading', () => {
    render(<Heading level={1} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('renders heading with level 2', () => {
    const text = 'text';
    render(<Heading level={2}>{text}</Heading>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
});
