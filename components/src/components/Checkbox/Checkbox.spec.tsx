import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Checkbox, CheckboxGroup } from '.';

describe('<Checkbox />', () => {
  it('should have a label', () => {
    const label = 'Select me';
    render(<Checkbox label={label} />);
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeDefined();
  });
  it('should be selectable', () => {
    render(<Checkbox id="test" label="Test" />);
    const checkbox = document.getElementById('test');
    expect(checkbox).not.toBeChecked();
    checkbox?.click();
    expect(checkbox).toBeChecked();
  });
  it('should be disabled', () => {
    render(<Checkbox id="test" label="Test" disabled />);
    const checkbox = document.getElementById('test');
    const input = document.querySelector('input');
    expect(input?.disabled).toBeTruthy();
    expect(checkbox).not.toBeChecked();
    checkbox?.click();
    expect(checkbox).not.toBeChecked();
  });
  it('children of CheckboxGroup should have aria-describedby as tip id when tip provided', () => {
    const groupId = 'groupId';
    render(
      <CheckboxGroup groupId={groupId} tip="tip">
        <Checkbox id="test" label="Test" />
      </CheckboxGroup>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-describedby', `${groupId}-tip`);
  });
  it('children of CheckboxGroup should have aria-describedby as errorMessage id and aria-invalid when errorMessage provided', () => {
    const groupId = 'groupId';
    render(
      <CheckboxGroup groupId={groupId} errorMessage="errorMessage">
        <Checkbox id="test" label="Test" />
      </CheckboxGroup>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute(
      'aria-describedby',
      `${groupId}-errorMessage`
    );
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });
});
