import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../../Button';

import { GridChild } from '.';

describe('<GridChild>', () => {
  it('renders content', () => {
    const text = 'text';
    render(<GridChild>{text}</GridChild>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders button', () => {
    render(<GridChild as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('renders button when React component returning button is passed', () => {
    render(<GridChild as={Button} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('supports Button htmlProps if as={Button}', () => {
    render(<GridChild as={Button} htmlProps={{ disabled: true }} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('supports Button root props if as={Button}', async () => {
    const onClick = vi.fn();
    render(<GridChild as={Button} onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalled();
  });
});
