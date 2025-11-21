import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SkipToContent } from '.';

describe('<SkipToContent>', () => {
  it('has a link in navigation', () => {
    const href = '#';
    render(<SkipToContent href={href} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', href);
  });
  it('renders provided text', () => {
    const text = 'text';
    render(<SkipToContent href="#" text={text} />);
    const labelElement = screen.getByText(text);
    expect(labelElement).toBeInTheDocument();
  });
});
