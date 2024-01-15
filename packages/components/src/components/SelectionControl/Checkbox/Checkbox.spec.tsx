import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Checkbox, CheckboxGroup } from '.';
import { userEvent } from '@testing-library/user-event';

describe('<Checkbox />', () => {
  it('should have a label', () => {
    const label = 'Select me';
    render(<Checkbox label={label} />);
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });
  it('should be selectable', async () => {
    render(<Checkbox id="test" label="Test" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it('should be disabled', async () => {
    render(<Checkbox id="test" label="Test" disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
  it('children of CheckboxGroup should have aria-describedby as tip id when tip provided', () => {
    const groupId = 'groupId';
    render(
      <CheckboxGroup groupId={groupId} tip="tip">
        <Checkbox id="test" label="Test" />
      </CheckboxGroup>,
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-describedby', `${groupId}-tip`);
  });
  it('children of CheckboxGroup should have aria-describedby as errorMessage id and aria-invalid when errorMessage provided', () => {
    const groupId = 'groupId';
    render(
      <CheckboxGroup groupId={groupId} errorMessage="errorMessage">
        <Checkbox id="test" label="Test" />
      </CheckboxGroup>,
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute(
      'aria-describedby',
      `${groupId}-errorMessage`,
    );
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });
});
