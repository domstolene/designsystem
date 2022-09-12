import { render, screen } from '@testing-library/react';
import { Caption } from './Caption';

describe('<Caption />', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Caption>{text}</Caption>);
    expect(screen.queryByText(text)).toBeInTheDocument();
  });
});
