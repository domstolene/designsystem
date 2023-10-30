import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { VisuallyHidden } from './VisuallyHidden';

describe('<VisuallyHidden />', () => {
  it('should render children', () => {
    const text = 'text';
    render(<VisuallyHidden as="span">{text}</VisuallyHidden>);
    expect(screen.getByText(text)).toBeInTheDocument;
  });
});
