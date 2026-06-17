import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Select } from './Select';
import { portalRender } from '../../test.utils';

describe('<Select>', () => {
  it('throws when used without ThemeProvider', () => {
    expect(() => render(<Select options={[]} />)).toThrow(
      'Select must be used within a ThemeProvider',
    );
  });

  it('renders combobox', () => {
    portalRender(<Select options={[]} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
  it('has a label', () => {
    const label = 'Label';
    portalRender(<Select options={[]} label={label} />);

    expect(screen.getByRole('combobox')).toHaveAccessibleName(label);
  });
  it('has selected value as accessibile description', () => {
    const id = 'id';
    const option = { label: 'alt', value: 'alt' };
    portalRender(<Select options={[option]} value={option} id={id} />);

    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAccessibleDescription(option.value);
  });
  it('has accessible description when tip provided', () => {
    const tip = 'tip';
    portalRender(<Select options={[]} tip={tip} />);

    expect(screen.getByRole('combobox')).toHaveAccessibleDescription(tip);
  });
  it('has accessible description and aria-invalid when errorMessage provided', () => {
    const id = 'id';
    const error = 'error';
    portalRender(<Select options={[]} errorMessage={error} id={id} />);

    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAccessibleDescription(error);
    expect(inputElement).toHaveAttribute('aria-invalid', 'true');
    const errorElement = screen.getByText(error);
    expect(errorElement).toBeInTheDocument();
  });

  it('renders custom option element when provided', async () => {
    const option = { label: 'Alternativ', value: 'alt' };
    portalRender(
      <Select
        options={[option]}
        customOptionElement={({ data }) => (
          <span>Custom option: {String(data.label)}</span>
        )}
      />,
    );

    await userEvent.click(screen.getByRole('combobox'));

    expect(
      await screen.findByText(`Custom option: ${option.label}`),
    ).toBeInTheDocument();
  });
});
