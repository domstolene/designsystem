import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Divider } from '.';

describe('<Divider>', () => {
  it('renders a horisontal line', () => {
    render(<Divider />);

    expect(screen.getByRole('separator')).toBeInTheDocument();
  });
});
