import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  it('should have a label', () => {
    const label = 'button label';
    render(<Button label={label} />);
    expect(screen.queryByText(label)).toBeDefined;
  });
  it('renders an anchor element if href prop is provided', () => {
    render(<Button href="/" />);
    const button = screen.getByRole('link');
    expect(button).toBeInTheDocument();
  });
});
