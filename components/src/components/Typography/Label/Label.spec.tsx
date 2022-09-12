import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('<Label />', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Label>{text}</Label>);
    expect(screen.queryByText(text)).toBeInTheDocument();
  });
});
