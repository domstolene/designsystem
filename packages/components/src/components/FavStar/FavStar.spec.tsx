import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { FavStar } from '.';

describe('<FavStar>', () => {
  it('should return checkbox', () => {
    render(<FavStar />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  it('should have accessible name', () => {
    const label = 'Select me';
    render(<FavStar aria-label={label} />);
    const favStar = screen.getByRole('checkbox');
    expect(favStar).toHaveAccessibleName(label);
  });
  it('should be selectable', async () => {
    render(<FavStar id="test" aria-label="Test" />);
    const favStar = screen.getByRole('checkbox');
    expect(favStar).not.toBeChecked();
    await userEvent.click(favStar);
    expect(favStar).toBeChecked();
  });
  it('should get focus on click', async () => {
    render(<FavStar />);
    const favStar = screen.getByRole('checkbox');
    await userEvent.click(favStar);

    expect(favStar).toHaveFocus();
  });
});
