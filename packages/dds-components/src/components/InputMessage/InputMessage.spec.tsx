import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { InputMessage } from './InputMessage';

describe('<InputMessage>', () => {
  it('renders tip', () => {
    const tip = 'tip';
    render(<InputMessage messageType="tip">{tip}</InputMessage>);
    expect(screen.getByText(tip)).toBeInTheDocument();
  });
  it('renders error message', () => {
    const errorMessage = 'errorMessage';
    render(<InputMessage messageType="error">{errorMessage}</InputMessage>);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
