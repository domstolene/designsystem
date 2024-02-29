import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { BackLink } from '.';

describe('<BackLink />', () => {
  it('should have a label', () => {
    const label = 'link';
    const href = '#';
    render(<BackLink label={label} href={href} />);

    const button = screen.queryByText(label);
    expect(button).toBeInTheDocument();
  });
  it('should be a link', () => {
    const label = 'link';
    const href = '#';
    render(<BackLink label={label} href={href} />);

    const button = screen.queryByRole('link');
    expect(button).toBeInTheDocument();
  });
});
