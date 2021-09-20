import '@testing-library/jest-dom';
import { LocalMessage } from './LocalMessage';
import { render, screen } from '@testing-library/react';

describe('<LocalMessage />', () => {
  it('has message', () => {
    const message = 'This is a message';
    render(<LocalMessage message={message} />);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeDefined();
  });
});
