import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { VisuallyHidden } from './VisuallyHidden';

describe('<VisuallyHidden />', () => {
  it('should render children', () => {
    const text = 'text';
    render(<VisuallyHidden as="span">{text}</VisuallyHidden>);
    expect(screen.getByText(text)).toBeInTheDocument;
  });
});
