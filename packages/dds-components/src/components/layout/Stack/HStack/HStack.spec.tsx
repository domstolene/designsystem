import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../../../Button';

import { HStack } from '.';

describe('<HStack>', () => {
  it('renders content', () => {
    const text = 'text';
    render(<HStack>{text}</HStack>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders specified HTML element', () => {
    render(<HStack as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('renders button when React component returning button is passed', () => {
    render(<HStack as={Button} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('supports Button htmlProps if as={Button}', () => {
    render(<HStack as={Button} htmlProps={{ disabled: true }} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('supports Button root props if as={Button}', async () => {
    const onClick = vi.fn();
    render(<HStack as={Button} onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalled();
  });
});
