import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Input } from '.';

describe('<Input>', () => {
  it('renders textbox', () => {
    render(<Input />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('has accessible name when aria-label is provided', () => {
    const label = 'label';
    render(<Input aria-label={label} />);
    expect(screen.getByRole('textbox')).toHaveAccessibleName(label);
  });
  it('is disabled', () => {
    render(<Input disabled />);

    expect(screen.getByRole('textbox')).toBeDisabled();
  });
  it('is required', () => {
    render(<Input required />);

    expect(screen.getByRole('textbox')).toBeRequired();
  });
  it('is readonly', () => {
    render(<Input readOnly />);

    expect(screen.getByRole('textbox')).toHaveAttribute('readonly', '');
  });
  it('gets value on input', async () => {
    const value = 'text';
    render(<Input />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, value);

    expect(input).toHaveFocus();
    expect(input).toHaveValue(value);
  });
  it('gets focus on click', async () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    await userEvent.click(input);

    expect(input).toHaveFocus();
  });

  it('renders with type email', () => {
    render(<Input type="email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });

  it('renders with defaultValue', () => {
    const defaultValue = 'default text';
    render(<Input defaultValue={defaultValue} />);
    expect(screen.getByRole('textbox')).toHaveValue(defaultValue);
  });

  it('renders with aria-required', () => {
    render(<Input aria-required />);
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-required',
      'true',
    );
  });
});
