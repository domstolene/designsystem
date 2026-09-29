import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ProgressBar } from './ProgressBar';

describe('<ProgressBar>', () => {
  it('renders progressbar', () => {
    render(<ProgressBar />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
  it('has accessible name', () => {
    const label = 'label';
    render(<ProgressBar label={label} />);
    expect(screen.getByRole('progressbar')).toHaveAccessibleName(label);
  });
  it('has accessible description when tip provided', () => {
    const tip = 'tip';
    render(<ProgressBar tip={tip} />);
    expect(screen.getByRole('progressbar')).toHaveAccessibleDescription(tip);
  });
  it('has accessible description when errorMessage provided', () => {
    const errorMessage = 'errorMessage';
    render(<ProgressBar errorMessage={errorMessage} />);
    expect(screen.getByRole('progressbar')).toHaveAccessibleDescription(
      errorMessage,
    );
  });
  it('passes value', () => {
    const value = 1;
    render(<ProgressBar value={value} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'value',
      value.toString(),
    );
  });
  it('passes value 0', () => {
    const value = 0;
    render(<ProgressBar value={value} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'value',
      value.toString(),
    );
  });
  it('does not pass invalid value', () => {
    const value = -1;
    render(<ProgressBar value={value} />);
    expect(screen.getByRole('progressbar')).not.toHaveAttribute(
      'value',
      value.toString(),
    );
  });
  it('passes max', () => {
    const max = 2;
    render(<ProgressBar max={max} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'max',
      max.toString(),
    );
  });
});
