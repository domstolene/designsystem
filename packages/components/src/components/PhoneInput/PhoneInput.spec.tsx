import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PhoneInput } from '.';

describe('<PhoneInput>', () => {
  it('should render combobox and textbox selected value', () => {
    render(<PhoneInput />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });
  it('should have selected value', () => {
    const callingCode = '+47';
    const phoneNumber = '99999999';
    render(<PhoneInput value={{ callingCode, phoneNumber }} />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue(callingCode);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue(phoneNumber);
  });
  it('should have a label', () => {
    const label = 'button label';
    render(<PhoneInput label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
  it('should have label assiociated with input', () => {
    const label = 'label';
    const id = 'id';
    render(<PhoneInput label={label} id={id} />);

    expect(screen.getByText(label)).toHaveAttribute(
      'for',
      `${id}-phone-number`,
    );
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'id',
      `${id}-phone-number`,
    );
  });
  it('should have label assiociated with select', () => {
    const label = 'label';
    const id = 'id';
    render(<PhoneInput id={id} selectLabel={label} />);

    expect(screen.getByText(label)).toHaveAttribute(
      'for',
      `${id}-country-code`,
    );
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'id',
      `${id}-country-code`,
    );
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
  it('should have aria-describedby when tip provided', () => {
    const id = 'id';
    const tip = 'this is a tip';
    render(<PhoneInput id={id} tip={tip} />);
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      `${id}-phone-input-tip`,
    );
  });
  it('should have aria-describedby when errorMessage provided', () => {
    const id = 'id';
    const errorMessage = 'this is an errorMessage';
    render(<PhoneInput id={id} errorMessage={errorMessage} />);
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      `${id}-phone-input-errorMessage`,
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
