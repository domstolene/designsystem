import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../../Button';

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
  it('renders button when React component returning button is passed', () => {
    render(<ShowHide as={Button} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('supports Button htmlProps if as={Button}', () => {
    render(<ShowHide as={Button} htmlProps={{ disabled: true }} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('supports Button root props if as={Button}', async () => {
    const onClick = vi.fn();
    render(<ShowHide as={Button} onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalled();
  });
});
