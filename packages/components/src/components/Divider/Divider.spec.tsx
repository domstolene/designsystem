import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Divider } from '.';

describe('<Divider />', () => {
  it('should render a horisontal line', () => {
    render(<Divider />);
    const hr = screen.getByRole('separator');
    expect(hr).toBeInTheDocument;
  });
});
