import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Hide } from '.';

describe('<Hide>', () => {
  it('should render content', () => {
    const text = 'text';
    render(<Hide>{text}</Hide>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
