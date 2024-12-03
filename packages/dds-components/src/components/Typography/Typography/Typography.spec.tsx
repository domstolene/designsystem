import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Typography } from './Typography';

describe('<Typography>', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Typography>{text}</Typography>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should render link', () => {
    render(<Typography typographyType="a" href="/" />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
  it('should render heading', () => {
    render(<Typography typographyType="headingSans01" />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
