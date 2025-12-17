import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../Button';

import { Contrast } from '.';

describe('<Contrast>', () => {
  it('renders text', () => {
    const text = 'text';
    render(<Contrast> {text} </Contrast>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders button', () => {
    render(<Contrast as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('renders button when React component returning button is passed', () => {
    render(<Contrast as={Button} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('supports Button props if as={Button}', () => {
    render(<Contrast as={Button} type="button" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('supports Button htmlProps if as={Button}', () => {
    render(<Contrast as={Button} htmlProps={{ disabled: true }} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('supports Button root props if as={Button}', async () => {
    const onClick = vi.fn();
    render(<Contrast as={Button} onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalled();
  });
});
