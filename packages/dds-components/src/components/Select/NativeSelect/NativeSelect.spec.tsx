import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  describe('clearable', () => {
    const value = '1';

    it('renders clear-button when defaultValue is set', () => {
      render(
        <NativeSelect clearable defaultValue={value}>
          <option value=""></option>
          <option value={value}>One</option>
        </NativeSelect>,
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('clear-button has accessible name', () => {
      render(
        <NativeSelect clearable defaultValue={value}>
          <option value=""></option>
          <option value={value}>One</option>
        </NativeSelect>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAccessibleName('Tøm nedtrekksliste');
    });

    it('renders clear-button when user selects a value', async () => {
      render(
        <NativeSelect clearable>
          <option value=""></option>
          <option value={value}>One</option>
        </NativeSelect>,
      );

      expect(screen.queryByRole('button')).not.toBeInTheDocument();

      const select = screen.getByRole('combobox');
      await userEvent.selectOptions(select, value);
      expect(
        screen.getByRole('button', { name: /Tøm nedtrekksliste/i }),
      ).toBeInTheDocument();
    });

    it('clears value when user hits clear-button', async () => {
      render(
        <NativeSelect clearable>
          <option value=""></option>
          <option value={value}>One</option>
        </NativeSelect>,
      );

      expect(screen.queryByRole('button')).not.toBeInTheDocument();

      const select = screen.getByRole('combobox');
      expect(select).not.toHaveValue();

      await userEvent.selectOptions(select, value);
      const button = screen.getByRole('button', {
        name: /Tøm nedtrekksliste/i,
      });
      expect(select).toHaveValue(value);

      await userEvent.click(button);
      expect(select).toHaveValue('');
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('throws an error if first <option> does not have value=""', () => {
      expect(() =>
        render(
          <NativeSelect clearable>
            <option value="not-empty">Invalid first option</option>
            <option value="1">One</option>
          </NativeSelect>,
        ),
      ).toThrowError(
        `Invalid configuration: The first <option> in <NativeSelect> must have value="" to support the clearable feature. 
      Please ensure the empty option is defined as:
      <option value=""></option>`,
      );
    });
  });
});
