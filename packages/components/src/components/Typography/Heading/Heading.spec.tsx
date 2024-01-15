import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

describe('<Heading />', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Heading level={1}>{text}</Heading>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should render a heading', () => {
    render(<Heading level={1} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('should render heading with level 2', () => {
    const text = 'text';
    render(<Heading level={2}>{text}</Heading>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
});
