import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { LocalMessage } from './LocalMessage';

describe('<LocalMessage>', () => {
  it('renders children', () => {
    const message = 'This is a message';
    render(<LocalMessage> {message} </LocalMessage>);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  it('renders heading', () => {
    const heading = 'This is a heading';
    render(<LocalMessage heading={heading} />);
    const headingText = screen.getByText(heading);
    expect(headingText).toBeInTheDocument();
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });

  it('calls onClose event', async () => {
    const event = vi.fn();
    render(<LocalMessage closable onClose={event} />);
    const closeButton = screen.getByRole('button');
    await userEvent.click(closeButton);
    expect(event).toHaveBeenCalled();
  });
});
