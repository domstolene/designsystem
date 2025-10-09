import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '.';

describe('<Button>', () => {
  it('should have a label', () => {
    const label = 'button label';
    render(<Button>{label}</Button>);

    expect(screen.getByText(label)).toBeInTheDocument();
  });
  it('renders button', () => {
    render(<Button />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('renders an anchor element if href prop is provided', () => {
    render(<Button href="/" />);
    const button = screen.getByRole('link');

    expect(button).toBeInTheDocument();
  });
  it('calls onClick when button is clicked', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick} />);
    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('disables the button if it is in a loading state', async () => {
    const onClick = vi.fn();
    render(<Button loading onClick={onClick} />);
    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(button).toBeDisabled();
    expect(onClick).not.toHaveBeenCalled();
  });
});
