import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Fieldset } from './Fieldset';

describe('<Fieldset>', () => {
  it('renders group', () => {
    render(<Fieldset />);
    expect(screen.getByRole('group')).toBeInTheDocument();
  });
  it('renders children', () => {
    const text = 'text';
    render(<Fieldset>{text}</Fieldset>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
