import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Select } from './Select';
import { ThemeProvider } from '../ThemeProvider';

describe('<Select>', () => {
  it('should render combobox', () => {
    render(
      <ThemeProvider>
        <Select options={[]} />
      </ThemeProvider>,
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
  it('should have a label', () => {
    const label = 'Label';
    render(
      <ThemeProvider>
        <Select options={[]} label={label} />
      </ThemeProvider>,
    );

    expect(screen.getByRole('combobox')).toHaveAccessibleName(label);
  });
  it('should have selected value as accessibile description', () => {
    const id = 'id';
    const option = { label: 'alt', value: 'alt' };
    render(
      <ThemeProvider>
        <Select options={[option]} value={option} id={id} />
      </ThemeProvider>,
    );

    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAccessibleDescription(option.value);
  });
  it('should have accessible description when tip provided', () => {
    const tip = 'tip';
    render(
      <ThemeProvider>
        <Select options={[]} tip={tip} />
      </ThemeProvider>,
    );

    expect(screen.getByRole('combobox')).toHaveAccessibleDescription(tip);
  });
  it('should have accessible description and aria-invalid when errorMessage provided', () => {
    const id = 'id';
    const error = 'error';
    render(
      <ThemeProvider>
        <Select options={[]} errorMessage={error} id={id} />
      </ThemeProvider>,
    );

    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAccessibleDescription(error);
    expect(inputElement).toHaveAttribute('aria-invalid', 'true');
    const errorElement = screen.getByText(error);
    expect(errorElement).toBeInTheDocument();
  });
});
