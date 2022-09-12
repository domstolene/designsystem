import { render, screen } from '@testing-library/react';
import { Paragraph } from './Paragraph';

describe('<Paragraph />', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Paragraph>{text}</Paragraph>);
    expect(screen.queryByText(text)).toBeInTheDocument();
  });
});
