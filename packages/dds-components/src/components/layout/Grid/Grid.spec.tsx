import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Grid } from '.';

describe('<Grid>', () => {
  it('renders content', () => {
    const text = 'text';
    render(<Grid>{text}</Grid>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders specified HTML element', () => {
    render(<Grid as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
