import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Link } from './Link';

describe('<Link>', () => {
  it('renders text', () => {
    const text = 'text';
    render(<Link>{text}</Link>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('has link role', () => {
    render(<Link href="/" />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
  it('should open on new page', () => {
    render(<Link href="/" external />);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });
  it('has noopener noreferer', () => {
    render(<Link href="/" external />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'rel',
      'noopener noreferer',
    );
  });
  it('has button role', () => {
    render(<Link href="/" as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
