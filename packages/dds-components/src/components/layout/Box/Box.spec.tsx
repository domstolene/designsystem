import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Box } from '.';

describe('<Box>', () => {
  it('should render content', () => {
    const text = 'text';
    render(<Box>{text}</Box>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should render specified HTML element', () => {
    render(<Box as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
