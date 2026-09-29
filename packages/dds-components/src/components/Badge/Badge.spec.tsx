import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from '.';

describe('<Badge>', () => {
  it('renders number', () => {
    const value = 5;
    render(<Badge>{value}</Badge>);
    expect(screen.getByText(value)).toBeInTheDocument();
  });
  it('renders empty span when no children are provided', () => {
    const container = render(<Badge></Badge>);
    const span = container.container.querySelector('span');
    expect(span).toBeInTheDocument();
  });
  it('renders max value with + if number exceeds max', () => {
    const max = 3;
    const value = max + 1;
    render(<Badge max={max}>{value}</Badge>);
    expect(screen.getByText(`${max}+`)).toBeInTheDocument();
  });
  it('renders 0 when showZero is true', () => {
    render(<Badge showZero>{0}</Badge>);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  it('does not render 0 when showZero is false', () => {
    render(<Badge>{0}</Badge>);
    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });
});
