import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Toggle } from '.';

describe('<Toggle>', () => {
  it('should render label', () => {
    const label = 'label';
    render(<Toggle children={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
  it('should have accessible name', () => {
    const label = 'label';
    render(<Toggle children={label} />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toHaveAccessibleName(label);
  });
  it('should be selectable', async () => {
    render(<Toggle children="label" />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).not.toBeChecked();
    await userEvent.click(toggle);
    expect(toggle).toBeChecked();
  });
  it('should get focus on click', async () => {
    render(<Toggle />);
    const toggle = screen.getByRole('checkbox');
    await userEvent.click(toggle);
    expect(toggle).toHaveFocus();
  });
});
