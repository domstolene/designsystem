import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { BackLink } from '.';

describe('<BackLink>', () => {
  it('has a label', () => {
    const label = 'link';
    const href = '#';
    render(<BackLink label={label} href={href} />);

    const link = screen.queryByText(label);
    expect(link).toBeInTheDocument();
  });
  it('returns navigation', () => {
    const label = 'link';
    const href = '#';
    render(<BackLink label={label} href={href} />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAccessibleName(/Gå tilbake/i);
  });
  it('is a link', () => {
    const label = 'link';
    const href = '#';
    render(<BackLink label={label} href={href} />);

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
  it('is a button', () => {
    const label = 'link';
    const href = '#';
    const role = 'button';
    render(<BackLink label={label} href={href} as={role} />);

    expect(screen.getByRole(role)).toBeInTheDocument();
  });
});
