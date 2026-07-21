import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Backdrop } from '.';

describe('<Backdrop>', () => {
  it('renders backdrop', () => {
    const { container } = render(<Backdrop zIndex="drawer" />);
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});
