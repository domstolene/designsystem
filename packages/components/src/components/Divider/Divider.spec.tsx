import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Divider } from '.';

describe('<Divider />', () => {
  it('should render a horisontal line', () => {
    render(<Divider />);
    const hr = screen.getByRole('separator');
    expect(hr).toBeInTheDocument;
  });
});
