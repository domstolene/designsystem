import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { LocalMessage } from './LocalMessage';

describe('<LocalMessage>', () => {
  it('has message', () => {
    const message = 'This is a message';
    render(<LocalMessage message={message} />);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });
  it('renders children', () => {
    const message = 'This is a message';
    render(<LocalMessage> {message} </LocalMessage>);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  it('renders children when both message and children provided', () => {
    const message = 'This is a message';
    const children = 'children';
    render(<LocalMessage message={message}> {children} </LocalMessage>);
    const messageElement = screen.queryByText(message);
    expect(messageElement).not.toBeInTheDocument();
    const childrenElement = screen.getByText(children);
    expect(childrenElement).toBeInTheDocument();
  });

  it('calls onClose event', async () => {
    const event = vi.fn();
    render(<LocalMessage closable onClose={event} />);
    const closeButton = screen.getByRole('button');
    await userEvent.click(closeButton);
    expect(event).toHaveBeenCalled();
  });
});
