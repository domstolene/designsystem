import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { FavStar } from '.';

describe('<FavStar>', () => {
  it('returns checkbox', () => {
    render(<FavStar />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  it('has accessible name', () => {
    const label = 'Select me';
    render(<FavStar aria-label={label} />);
    const favStar = screen.getByRole('checkbox');
    expect(favStar).toHaveAccessibleName(label);
  });
  it('is selectable', async () => {
    render(<FavStar id="test" aria-label="Test" />);
    const favStar = screen.getByRole('checkbox');
    expect(favStar).not.toBeChecked();
    await userEvent.click(favStar);
    expect(favStar).toBeChecked();
  });
  it('gets focus on click', async () => {
    render(<FavStar />);
    const favStar = screen.getByRole('checkbox');
    await userEvent.click(favStar);

    expect(favStar).toHaveFocus();
  });
});
