import '@testing-library/jest-dom';
import { GlobalMessage } from './GlobalMessage';
import { render, screen } from '@testing-library/react';

describe('<GlobalMessage />', () => {
  it('has message', () => {
    const message = 'This is a message';
    render(<GlobalMessage message={message} />);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeDefined();
  });
});
