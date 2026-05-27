import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Bleed } from '.';
import { Button } from '../../Button';

describe('<Bleed>', () => {
  it('renders content', () => {
    const text = 'text';
    render(<Bleed>{text} </Bleed>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders button if as="button"', () => {
    const text = 'text';
    render(<Bleed as="button">{text} </Bleed>);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });
  it('renders button if as={Button}', () => {
    const text = 'text';
    render(<Bleed as={Button}>{text} </Bleed>);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });
});
