import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TextArea } from '.';

describe('<TeaxtArea />', () => {
  it('should have a label', () => {
    const label = 'button label';
    const id = 'id';
    render(<TextArea label={label} id={id} />);
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(label)).toHaveAttribute('for', id);
  });
  it('renders provided error message', () => {
    const errorMessage = 'this is an error';
    render(<TextArea errorMessage={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
  it('renders provided tip', () => {
    const tip = 'this is a tip';
    render(<TextArea tip={tip} />);
    expect(screen.getByText(tip)).toBeInTheDocument();
  });
  it('should have aria-describedby when tip provided', () => {
    const id = 'id';
    const tip = 'this is a tip';
    render(<TextArea id={id} tip={tip} />);
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      `${id}-tip`,
    );
  });
  it('should have aria-describedby and aria-invalid when errorMessage provided', () => {
    const id = 'id';
    const errorMessage = 'this is an errorMessage';
    render(<TextArea id={id} errorMessage={errorMessage} />);
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      `${id}-errorMessage`,
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });
  it('renders error message instead of tip when both are provided', () => {
    const tip = 'this is a tip';
    const errorMessage = 'this is an error';
    render(<TextArea tip={tip} errorMessage={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.queryByText(tip)).not.toBeInTheDocument();
  });
});
