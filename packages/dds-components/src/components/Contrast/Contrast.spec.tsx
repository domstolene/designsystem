import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Contrast } from '.';

describe('<Contrast>', () => {
  it('renders text', () => {
    const text = 'text';
    render(<Contrast> {text} </Contrast>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
