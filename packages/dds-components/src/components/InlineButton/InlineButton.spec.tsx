import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { InlineButton } from './InlineButton';

describe('<InlineButton>', () => {
  it('renders button', () => {
    render(<InlineButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('renders button text', () => {
    const text = 'text';
    render(<InlineButton>{text}</InlineButton>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('calls onClick when button is clicked', async () => {
    const onClick = vi.fn();
    render(<InlineButton onClick={onClick} />);
    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
