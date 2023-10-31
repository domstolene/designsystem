import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputMessage } from './InputMessage';

describe('<InputMessage />', () => {
  it('should render tip', () => {
    const tip = 'tip';
    render(<InputMessage messageType="tip" message={tip} />);
    expect(screen.getByText(tip)).toBeInTheDocument;
  });
  it('should render error message', () => {
    const errorMessage = 'errorMessage';
    render(<InputMessage messageType="error" message={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument;
  });
});
