import { vi, describe, it, expect } from 'vitest';
import { LocalMessage } from './LocalMessage';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('<LocalMessage />', () => {
  it('has message', () => {
    const message = 'This is a message';
    render(<LocalMessage message={message} />);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  it('should call onClose event', async () => {
    const event = vi.fn();
    render(<LocalMessage closable onClose={event} />);
    const closeButton = screen.getByRole('button');
    await userEvent.click(closeButton);
    expect(event).toHaveBeenCalled();
  });
});
