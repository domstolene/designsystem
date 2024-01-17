import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Link } from './Link';

describe('<Link />', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Link>{text}</Link>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should have role="link"', () => {
    render(<Link href="/">text</Link>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
