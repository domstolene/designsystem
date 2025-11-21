import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ShowHide } from '.';

describe('<ShowHide>', () => {
  it('renders content', () => {
    const text = 'text';
    render(<ShowHide>{text}</ShowHide>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders specified HTML element', () => {
    render(<ShowHide as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
