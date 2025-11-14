import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { ToggleButton, ToggleButtonGroup } from '.';

describe('<ToggleButton>', () => {
  it('should render label', () => {
    const label = 'label';
    render(<ToggleButton label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('should be selectable', async () => {
    render(<ToggleButton label="label" />);
    const toggleButton = screen.getByRole('checkbox');
    expect(toggleButton).not.toBeChecked();
    await userEvent.click(toggleButton);
    expect(toggleButton).toBeChecked();
  });
  it('should get focus on click', async () => {
    render(<ToggleButton />);
    const toggleButton = screen.getByRole('checkbox');
    await userEvent.click(toggleButton);

    expect(toggleButton).toHaveFocus();
  });
});
describe('<ToggleButtonGroup>', () => {
  it('should have group', () => {
    render(
      <ToggleButtonGroup>
        <ToggleButton />
      </ToggleButtonGroup>,
    );

    const group = screen.getByRole('group');
    expect(group).toBeInTheDocument();
  });
  it('should have accessible name when label provided', () => {
    const label = 'label';
    render(
      <ToggleButtonGroup label={label}>
        <ToggleButton />
      </ToggleButtonGroup>,
    );

    const group = screen.getByRole('group');
    expect(group).toHaveAccessibleName(label);
  });
});
