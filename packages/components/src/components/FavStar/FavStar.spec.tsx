import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { FavStar } from '.';

describe('<FavStar />', () => {
  it('should return checkbox', () => {
    render(<FavStar />);
    const checkbox = screen.queryByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });
  it('should have aria-label', () => {
    const label = 'Select me';
    render(<FavStar aria-label={label} />);
    const labelElement = screen.getByLabelText(label);
    expect(labelElement).toHaveAttribute('aria-label', label);
  });
  it('should be selectable', async () => {
    render(<FavStar id="test" aria-label="Test" />);
    const favStar = screen.getByRole('checkbox');
    expect(favStar).not.toBeChecked();
    await userEvent.click(favStar);
    expect(favStar).toBeChecked();
  });
});
