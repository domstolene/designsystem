import '@testing-library/jest-dom';
import { GlobalMessage } from './GlobalMessage';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<GlobalMessage />', () => {
  it('has message', () => {
    const message = 'This is a message';
    render(<GlobalMessage message={message} />);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeDefined();
  });

  it('should call onClose event', () => {
    const event = jest.fn();
    const { container } = render(<GlobalMessage closable onClose={event} />);
    const closeButton = container.querySelector('button');
    fireEvent.click(closeButton!);
    expect(event).toHaveBeenCalled();
  });
});
