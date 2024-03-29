import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Select } from './Select';

describe('<Select />', () => {
  it('should have a label', () => {
    const label = 'Label';
    render(
      <Select options={[{ label: 'label', value: 'item' }]} label={label} />,
    );
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });
  it('should have aria-describedby for selected value', () => {
    const id = 'id';
    render(<Select options={[{ label: 'label', value: 'item' }]} id={id} />);
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAttribute(
      'aria-describedby',
      `${id}-singleValue`,
    );
  });
  it('should have aria-describedby for tip when tip provided', () => {
    const id = 'id';
    render(
      <Select
        options={[{ label: 'label', value: 'item' }]}
        tip="tip"
        id={id}
      />,
    );
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAttribute(
      'aria-describedby',
      `${id}-singleValue ${id}-tip`,
    );
  });
  it('should have aria-describedby for error message and aria-invalid when errorMessage provided', () => {
    const id = 'id';
    render(
      <Select
        options={[{ label: 'label', value: 'item' }]}
        errorMessage="error"
        id={id}
      />,
    );
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAttribute(
      'aria-describedby',
      `${id}-singleValue ${id}-errorMessage`,
    );
    expect(inputElement).toHaveAttribute('aria-invalid', 'true');
  });
});
