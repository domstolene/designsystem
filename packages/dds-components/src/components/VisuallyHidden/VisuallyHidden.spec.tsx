import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { VisuallyHidden } from './VisuallyHidden';

describe('<VisuallyHidden>', () => {
  it('should render children', () => {
    const text = 'text';
    render(<VisuallyHidden>{text}</VisuallyHidden>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should render <p>', () => {
    render(<VisuallyHidden as="p" />);
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });
});
