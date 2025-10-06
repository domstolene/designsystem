import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Link } from './Link';

describe('<Link>', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Link>{text}</Link>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should have role="link"', () => {
    render(<Link href="/" />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
  it('should open on new page', () => {
    render(<Link href="/" external />);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });
  it('should have noopener noreferer', () => {
    render(<Link href="/" external />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'rel',
      'noopener noreferer',
    );
  });
  it('should have role="button"', () => {
    render(<Link href="/" as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
