import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ClearButton } from '.';

describe('<ClearButton>', () => {
  it('renders clear button', () => {
    render(<ClearButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('renders svg', () => {
    const { container } = render(<ClearButton />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
