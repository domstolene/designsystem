import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

describe('<Heading />', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Heading level={1}>{text}</Heading>);
    expect(screen.queryByText(text)).toBeInTheDocument();
  });
});
