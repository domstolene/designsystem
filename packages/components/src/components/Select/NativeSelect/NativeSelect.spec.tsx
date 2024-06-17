import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { NativeSelect } from './NativeSelect';

describe('<NativeSelect />', () => {
  it('should have a label', () => {
    const label = 'Label';
    render(<NativeSelect label={label} />);
    const labelElement = screen.queryByText(label);
    expect(labelElement).toBeInTheDocument();
  });
  it('should connect label to select', () => {
    const label = 'Label';
    const id = 'id';
    render(<NativeSelect id={id} label={label} />);
    const labelElement = screen.getByText(label);
    expect(labelElement).toHaveAttribute('for', id);
  });
  it('should have selected value', () => {
    render(
      <NativeSelect>
        <option value="value" selected>
          label
        </option>
      </NativeSelect>,
    );
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveValue('value');
  });
  it('should be disabled', () => {
    render(<NativeSelect disabled />);
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAttribute('disabled', '');
  });
  it('should have aria-describedby for tip when tip provided', () => {
    const id = 'id';
    render(<NativeSelect tip="tip" id={id} />);
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAttribute('aria-describedby', `${id}-tip`);
  });
  it('should have aria-describedby for error message and aria-invalid when errorMessage provided', () => {
    const id = 'id';
    render(<NativeSelect errorMessage="error" id={id} />);
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAttribute(
      'aria-describedby',
      `${id}-errorMessage`,
    );
    expect(inputElement).toHaveAttribute('aria-invalid', 'true');
  });
});
