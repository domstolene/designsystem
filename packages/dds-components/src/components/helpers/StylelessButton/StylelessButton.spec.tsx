import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { StylelessButton } from '.';

describe('<StylelessButton>', () => {
  it('renders button', () => {
    render(<StylelessButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
