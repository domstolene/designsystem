import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Typography } from './Typography';

describe('<Typography />', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Typography>{text}</Typography>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should have role="link"', () => {
    render(
      <Typography typographyType="a" href="/">
        text
      </Typography>,
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
