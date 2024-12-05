import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Paragraph } from './Paragraph';

describe('<Paragraph>', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Paragraph>{text}</Paragraph>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should render <p>', () => {
    const text = 'text';
    render(<Paragraph>{text}</Paragraph>);
    expect(screen.getByText(text).nodeName).toBe('P');
  });
});
