import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Typography } from './Typography';

describe('<Typography>', () => {
  it('renders text', () => {
    const text = 'text';
    render(<Typography>{text}</Typography>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders link', () => {
    render(<Typography typographyType="a" href="/" />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
  it('renders heading', () => {
    render(<Typography typographyType="headingSmall" />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('renders paragraph', () => {
    render(<Typography typographyType="bodyLongSmall" />);
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });
  it('renders button', () => {
    render(<Typography as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
