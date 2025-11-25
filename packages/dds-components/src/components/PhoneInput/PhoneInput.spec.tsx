import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PhoneInput } from '.';

describe('<PhoneInput>', () => {
  it('renders combobox and textbox', () => {
    render(<PhoneInput />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });
  it('has selected value', () => {
    const countryCode = 'NO';
    const phoneNumber = '99999999';
    render(<PhoneInput value={{ countryCode, phoneNumber }} />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue(countryCode);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue(phoneNumber);
  });
  it('renders label', () => {
    const label = 'label';
    render(<PhoneInput label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
  it('has accessible name associated with input', () => {
    const label = 'label';

    render(<PhoneInput label={label} />);
    expect(screen.getByRole('textbox')).toHaveAccessibleName(label);
  });
  it('has accessible name associated with select', () => {
    const label = 'label';

    render(<PhoneInput selectLabel={label} />);
    expect(screen.getByRole('combobox')).toHaveAccessibleName(label);
  });
  it('has accessible name associated with group', () => {
    const label = 'label';

    render(<PhoneInput groupLabel={label} />);
    expect(screen.getByRole('group')).toHaveAccessibleName(label);
  });
  it('renders provided error message', () => {
    const errorMessage = 'this is an error';
    render(<PhoneInput errorMessage={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
  it('renders provided tip', () => {
    const tip = 'this is a tip';
    render(<PhoneInput tip={tip} />);
    expect(screen.getByText(tip)).toBeInTheDocument();
  });
  it('has accessible description when tip provided', () => {
    const tip = 'this is a tip';
    render(<PhoneInput tip={tip} />);
    expect(screen.getByRole('textbox')).toHaveAccessibleDescription(tip);
    expect(screen.getByRole('combobox')).toHaveAccessibleDescription(tip);
  });
  it('has accessible description and invalid state when errorMessage provided', () => {
    const errorMessage = 'this is an errorMessage';
    render(<PhoneInput errorMessage={errorMessage} />);
    expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
      errorMessage,
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });
  it('renders error message instead of tip when both are provided', () => {
    const tip = 'this is a tip';
    const errorMessage = 'this is an error';
    render(<PhoneInput tip={tip} errorMessage={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.queryByText(tip)).not.toBeInTheDocument();
  });
});
