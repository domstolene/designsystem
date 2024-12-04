import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Spinner } from '.';

describe('<Spinner>', () => {
  it('should render progressbar', () => {
    render(<Spinner />);
    const spinner = screen.getByRole('progressbar');
    expect(spinner).toBeInTheDocument();
  });
  it('should have accessible name', () => {
    const tooltip = 'tooltip';
    render(<Spinner tooltip={tooltip} />);
    const spinner = screen.getByRole('progressbar');
    expect(spinner).toHaveAccessibleName(tooltip);
  });
});
