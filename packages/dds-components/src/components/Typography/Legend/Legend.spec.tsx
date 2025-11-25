import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Legend } from './Legend';

describe('<Legend>', () => {
  it('renders text', () => {
    const text = 'text';
    render(<Legend>{text}</Legend>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders <legend>', () => {
    const text = 'text';
    render(<Legend>{text}</Legend>);
    expect(screen.getByText(text).nodeName).toBe('LEGEND');
  });
});
