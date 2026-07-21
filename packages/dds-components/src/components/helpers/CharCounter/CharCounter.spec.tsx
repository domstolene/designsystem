import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { CharCounter } from '.';

describe('<CharCounter>', () => {
  it('renders char counter', () => {
    const { container } = render(<CharCounter id="id" current={0} max={100} />);
    expect(container.querySelector('div')).toBeInTheDocument();
  });
  it('has id', () => {
    const id = 'id';
    const { container } = render(<CharCounter id={id} current={0} max={100} />);
    expect(container.querySelector('div')).toHaveAttribute('id', id);
  });
  it('renders char count', () => {
    render(<CharCounter id="id" current={0} max={100} />);
    expect(screen.getByText(/0\s*\/\s*100/)).toBeInTheDocument();
  });
  it('has accessible description', () => {
    const current = 1;
    const max = 100;
    render(<CharCounter id="id" current={current} max={max} />);
    const remain = max - current;
    expect(
      screen.getByText(`${current} av ${max} tegn skrevet. ${remain} igjen.`),
    ).toBeInTheDocument();
  });
});
