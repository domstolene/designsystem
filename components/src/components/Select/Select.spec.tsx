import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Select } from './Select';

describe('<Select />', () => {
  it('should have a label', () => {
    const label = 'Label';
    render(
      <Select options={[{ label: 'label', value: 'item' }]} label={label} />
    );
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeDefined();
  });
  it('should have aria-describedby when tip provided', () => {
    const id = 'id';
    render(
      <Select options={[{ label: 'label', value: 'item' }]} tip="tip" id={id} />
    );
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAttribute('aria-describedby', `${id}-tip`);
  });
  it('should have aria-errormessage and aria-invalid when errorMessage provided', () => {
    render(
      <Select
        options={[{ label: 'label', value: 'item' }]}
        errorMessage="error"
      />
    );
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveAttribute('aria-errormessage');
    expect(inputElement).toHaveAttribute('aria-invalid');
  });
});
