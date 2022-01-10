import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SkipToContent } from '.';

describe('<SkipToContent />', () => {
  it('should have a link in navigation', () => {
    const href = '#';
    const { container } = render(<SkipToContent href={href} />);
    const link = container.querySelector('div')?.querySelector('a');
    expect(link).toHaveAttribute('href', href);
  });
  it('should display provided text', () => {
    const text = 'text';
    render(<SkipToContent href="#" text={text} />);
    const labelElement = screen.getByText(text);
    expect(labelElement).toBeDefined();
  });
});
