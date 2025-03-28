import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Paper } from '.';

describe('<Paper>', () => {
  it('should render content', () => {
    const text = 'text';
    render(<Paper>{text}</Paper>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should render specified HTML element', () => {
    render(<Paper as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
