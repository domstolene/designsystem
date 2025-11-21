import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Box } from '.';

describe('<Box>', () => {
  it('renders content', () => {
    const text = 'text';
    render(<Box>{text}</Box>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders specified HTML element', () => {
    render(<Box as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
