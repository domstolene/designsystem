import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Paper } from '.';

describe('<Paper>', () => {
  it('renders content', () => {
    const text = 'text';
    render(<Paper>{text}</Paper>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders specified HTML element', () => {
    render(<Paper as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
