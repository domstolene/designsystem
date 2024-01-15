import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkipToContent } from '.';

describe('<SkipToContent />', () => {
  it('should have a link in navigation', () => {
    const href = '#';
    render(<SkipToContent href={href} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', href);
  });
  it('should display provided text', () => {
    const text = 'text';
    render(<SkipToContent href="#" text={text} />);
    const labelElement = screen.getByText(text);
    expect(labelElement).toBeInTheDocument();
  });
});
