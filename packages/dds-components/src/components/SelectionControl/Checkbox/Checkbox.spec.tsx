import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Checkbox, CheckboxGroup } from '.';

describe('<Checkbox>', () => {
  it('should render checkbox', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });
  it('should have a label', () => {
    const label = 'Select me';
    render(<Checkbox label={label} />);
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });
  it('should be selectable', async () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it('should get focus on click', async () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    expect(checkbox).toHaveFocus();
  });
  it('should be disabled', async () => {
    render(<Checkbox disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
  describe('<CheckboxGroup>', () => {
    it('children of CheckboxGroup should have accessible description when tip provided', () => {
      const tip = 'tip';
      render(
        <CheckboxGroup tip={tip}>
          <Checkbox />
        </CheckboxGroup>,
      );
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAccessibleDescription(tip);
    });
    it('children of CheckboxGroup should be invalid and have have accessible description when errorMessage provided', () => {
      const errorMessage = 'error';
      render(
        <CheckboxGroup errorMessage={errorMessage}>
          <Checkbox />
        </CheckboxGroup>,
      );
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAccessibleDescription(errorMessage);
      expect(checkbox).toBeInvalid();
    });
  });
});
