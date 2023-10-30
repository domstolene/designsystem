import { vi, describe, it, expect } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  it('should have a label', () => {
    const label = 'button label';
    render(<Button>{label}</Button>);

    expect(screen.queryByText(label)).toBeInTheDocument();
  });
  it('renders an anchor element if href prop is provided', () => {
    render(<Button href="/" />);
    const button = screen.getByRole('link');

    expect(button).toBeInTheDocument();
  });
  it('calls onClick when button is clicked', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick} />);
    const button = screen.getByRole('button');
    act(() => {
      fireEvent.click(button);
    });

    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('disables the button if it is in a loading state', () => {
    const onClick = vi.fn();
    render(<Button loading onClick={onClick} />);
    const button = screen.getByRole('button');
    act(() => {
      fireEvent.click(button);
    });

    expect(button).toHaveAttribute('aria-disabled', 'true');
    expect(onClick).not.toHaveBeenCalled();
  });
});
