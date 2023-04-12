import { vi } from 'vitest';
import { LocalMessage } from './LocalMessage';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<LocalMessage />', () => {
  it('has message', () => {
    const message = 'This is a message';
    render(<LocalMessage message={message} />);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  it('should call onClose event', () => {
    const event = vi.fn();
    const { container } = render(<LocalMessage closable onClose={event} />);
    const closeButton = container.querySelector('button');
    fireEvent.click(closeButton!);
    expect(event).toHaveBeenCalled();
  });
});
