import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Toggle } from '.';

describe('<Toggle>', () => {
  it('renders label', () => {
    const label = 'label';
    render(<Toggle children={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
  it('has accessible name', () => {
    const label = 'label';
    render(<Toggle children={label} />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toHaveAccessibleName(label);
  });
  it('is selectable', async () => {
    render(<Toggle children="label" />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).not.toBeChecked();
    await userEvent.click(toggle);
    expect(toggle).toBeChecked();
  });
  it('gets focus on click', async () => {
    render(<Toggle />);
    const toggle = screen.getByRole('checkbox');
    await userEvent.click(toggle);
    expect(toggle).toHaveFocus();
  });
  it('is disabled', async () => {
    render(<Toggle disabled />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeDisabled();
  });
  it('has loading status', async () => {
    render(<Toggle isLoading />);
    const spinner = screen.queryByRole('progressbar');
    expect(spinner).toBeInTheDocument();
  });
  it('is disabled while loading', async () => {
    render(<Toggle isLoading />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeDisabled();
  });
});
