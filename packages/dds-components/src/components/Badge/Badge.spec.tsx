import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from '.';

describe('<Badge>', () => {
  it('renders number', () => {
    const value = 5;
    render(<Badge>{value}</Badge>);
    expect(screen.getByText(value)).toBeInTheDocument();
  });
  it('renders max value with + if number exceeds max', () => {
    const max = 3;
    const value = max + 1;
    render(<Badge max={max}>{value}</Badge>);
    expect(screen.getByText(`${max}+`)).toBeInTheDocument();
  });
});
