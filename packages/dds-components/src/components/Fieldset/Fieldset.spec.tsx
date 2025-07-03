import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Fieldset } from './Fieldset';

describe('<Fieldset>', () => {
  it('should render group', () => {
    render(<Fieldset />);
    expect(screen.getByRole('group')).toBeInTheDocument();
  });
  it('should render children', () => {
    const text = 'text';
    render(<Fieldset>{text}</Fieldset>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
