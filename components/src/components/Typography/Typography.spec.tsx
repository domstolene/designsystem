import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

describe('<Typography />', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Typography>{text}</Typography>);
    expect(screen.queryByText(text)).toBeDefined;
  });
});
