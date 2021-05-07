import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Select } from './Select';

describe('<Select />', () => {
  it('should have a label', () => {
    const label = 'Label';
    render(<Select items={['item']} label={label} />);
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeDefined();
  });
});
