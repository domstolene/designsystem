import { vi, describe, it, expect } from 'vitest';
import { GlobalMessage } from './GlobalMessage';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<GlobalMessage />', () => {
  it('has message', () => {
    const message = 'This is a message';
    render(<GlobalMessage message={message} />);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  it('should call onClose event', () => {
    const event = vi.fn();
    const { container } = render(<GlobalMessage closable onClose={event} />);
    const closeButton = container.querySelector('button');
    fireEvent.click(closeButton!);
    expect(event).toHaveBeenCalled();
  });
});
