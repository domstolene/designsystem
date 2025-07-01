import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { InputMessage } from './InputMessage';

describe('<InputMessage />', () => {
  it('should render tip', () => {
    const tip = 'tip';
    render(<InputMessage messageType="tip" message={tip} />);
    expect(screen.getByText(tip)).toBeInTheDocument();
  });
  it('should render error message', () => {
    const errorMessage = 'errorMessage';
    render(<InputMessage messageType="error" message={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
