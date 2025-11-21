import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { GlobalMessage } from './GlobalMessage';

describe('<GlobalMessage>', () => {
  it('has message', () => {
    const message = 'This is a message';
    render(<GlobalMessage message={message} />);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  it('renders children', () => {
    const message = 'This is a message';
    render(<GlobalMessage> {message} </GlobalMessage>);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  it('renders children when both message and children provided', () => {
    const message = 'This is a message';
    const children = 'children';
    render(<GlobalMessage message={message}> {children} </GlobalMessage>);
    const messageElement = screen.queryByText(message);
    expect(messageElement).not.toBeInTheDocument();
    const childrenElement = screen.getByText(children);
    expect(childrenElement).toBeInTheDocument();
  });

  it('calls onClose event', () => {
    const event = vi.fn();
    render(<GlobalMessage closable onClose={event} />);
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton!);
    expect(event).toHaveBeenCalled();
  });
});
