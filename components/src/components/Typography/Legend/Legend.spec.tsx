import { render, screen } from '@testing-library/react';
import { Legend } from './Legend';

describe('<Legend />', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Legend>{text}</Legend>);
    expect(screen.queryByText(text)).toBeInTheDocument();
  });
});
