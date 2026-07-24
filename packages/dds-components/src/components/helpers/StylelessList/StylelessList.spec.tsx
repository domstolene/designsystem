import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { StylelessList, StylelessOList } from '.';

describe('<StylelessList>', () => {
  it('renders list', () => {
    render(<StylelessList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  it('renders list if ordered', () => {
    render(<StylelessOList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
