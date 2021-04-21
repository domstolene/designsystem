import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

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
});
