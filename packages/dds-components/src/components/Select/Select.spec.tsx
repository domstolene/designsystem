import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Select } from './Select';

describe('<Select>', () => {
  it('should render combobox', () => {
    render(<Select options={[]} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
  it('should have a label', () => {
    const label = 'Label';
    render(<Select options={[]} label={label} />);

    expect(screen.getByRole('combobox')).toHaveAccessibleName(label);
  });
  it('should have selected value as accessibile description', () => {
    const id = 'id';
    const option = { label: 'alt', value: 'alt' };
    render(<Select options={[option]} value={option} id={id} />);
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAccessibleDescription(option.value);
  });
  it('should have accessible description when tip provided', () => {
    const tip = 'tip';
    render(<Select options={[]} tip={tip} />);
    expect(screen.getByRole('combobox')).toHaveAccessibleDescription(tip);
  });
  it('should have accessible description and aria-invalid when errorMessage provided', () => {
    const id = 'id';
    const error = 'error';
    render(<Select options={[]} errorMessage={error} id={id} />);
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAccessibleDescription(error);
    expect(inputElement).toHaveAttribute('aria-invalid', 'true');
    const errorElement = screen.getByText(error);
    expect(errorElement).toBeInTheDocument();
  });
});
