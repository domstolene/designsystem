import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { NativeSelect } from './NativeSelect';

describe('<NativeSelect>', () => {
  it('should render combobox', () => {
    render(<NativeSelect />);

    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toBeInTheDocument();
  });
  it('should have a connected label', () => {
    const label = 'Label';
    render(<NativeSelect label={label} />);
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAccessibleName(label);
  });
  it('should have selected value', () => {
    const value = 'value';
    render(
      <NativeSelect>
        <option value={value} selected>
          label
        </option>
      </NativeSelect>,
    );
    expect(screen.getByRole('combobox')).toHaveValue(value);
  });
  it('should be disabled', () => {
    render(<NativeSelect disabled />);
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAttribute('disabled', '');
  });
  it('should have accessible description when tip provided', () => {
    const tip = 'tip';
    render(<NativeSelect tip={tip} />);

    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAccessibleDescription(tip);
  });
  it('should have accessible description  and aria-invalid when errorMessage provided', () => {
    const id = 'id';
    const error = 'error';
    render(<NativeSelect errorMessage={error} id={id} />);
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAccessibleDescription(error);
    expect(inputElement).toHaveAttribute('aria-invalid', 'true');

    const errorElement = screen.getByText(error);
    expect(errorElement).toBeInTheDocument();
  });
});
