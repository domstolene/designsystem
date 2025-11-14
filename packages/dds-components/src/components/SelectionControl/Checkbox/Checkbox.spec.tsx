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
  it('should have an accessible name', () => {
    const label = 'Select me';
    render(<Checkbox aria-label={label} />);
    expect(screen.getByRole('checkbox')).toHaveAccessibleName(label);
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
  it('should be readOnly', async () => {
    render(<Checkbox readOnly />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('aria-readonly', 'true');

    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
  it('should be required', () => {
    render(<Checkbox required />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeRequired();
  });
  it('should be indeterminate', async () => {
    render(<Checkbox indeterminate />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
  });
  it('should get selected with keyboard input', async () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    await userEvent.keyboard('[Tab]');
    await userEvent.keyboard('[Space]');

    expect(checkbox).toBeChecked();
  });
  describe('<CheckboxGroup>', () => {
    it('should render group', () => {
      render(
        <CheckboxGroup>
          <Checkbox />
        </CheckboxGroup>,
      );
      const group = screen.getByRole('group');
      expect(group).toBeInTheDocument();
    });
    it('should have accessible name', () => {
      const label = 'label';
      render(
        <CheckboxGroup label={label}>
          <Checkbox />
        </CheckboxGroup>,
      );
      const group = screen.getByRole('group');
      expect(group).toHaveAccessibleName(label);
    });
    it('children should have accessible description when tip provided', () => {
      const tip = 'tip';
      render(
        <CheckboxGroup tip={tip}>
          <Checkbox />
        </CheckboxGroup>,
      );
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAccessibleDescription(tip);
    });
    it('children should be invalid and have have accessible description when errorMessage provided', () => {
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
    it('should disable all checkboxes in a disabled checkbox group', async () => {
      render(
        <CheckboxGroup disabled>
          <Checkbox />
          <Checkbox />
        </CheckboxGroup>,
      );

      const checkboxes = screen.getAllByRole('checkbox');

      expect(checkboxes[0]).toBeDisabled();
      expect(checkboxes[1]).toBeDisabled();

      expect(checkboxes[0]).not.toBeChecked();
      await userEvent.click(checkboxes[0]);
      expect(checkboxes[0]).not.toBeChecked();

      expect(checkboxes[1]).not.toBeChecked();
      await userEvent.click(checkboxes[1]);
      expect(checkboxes[1]).not.toBeChecked();
    });
    it('should make all checkboxes inside a read only checkbox group read only', async () => {
      render(
        <CheckboxGroup readOnly>
          <Checkbox value={1} />
          <Checkbox value={2} />
        </CheckboxGroup>,
      );
      const checkboxes = screen.getAllByRole('checkbox');

      checkboxes.forEach(checkbox => {
        expect(checkbox).toHaveAttribute('aria-readonly', 'true');
      });

      await userEvent.click(checkboxes[0]);
      expect(checkboxes[0]).not.toBeChecked();
    });
  });
});
