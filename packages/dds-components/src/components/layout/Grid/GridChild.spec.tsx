import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { GridChild } from '.';

describe('<GridChild>', () => {
  it('should render content', () => {
    const text = 'text';
    render(<GridChild>{text}</GridChild>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should render specified HTML element', () => {
    render(<GridChild as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
