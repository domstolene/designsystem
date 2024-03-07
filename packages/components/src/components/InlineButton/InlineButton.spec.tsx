import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { InlineButton } from './InlineButton';

describe('<InlineButton />', () => {
  it('should render button', () => {
    render(<InlineButton />);
    expect(screen.getByRole('button')).toBeInTheDocument;
  });
  it('should render button text', () => {
    const text = 'text';
    render(<InlineButton>{text}</InlineButton>);
    expect(screen.getByText(text)).toBeInTheDocument;
  });
});
