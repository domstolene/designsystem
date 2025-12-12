import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../../../Button';

import { VStack } from '.';

describe('<VStack>', () => {
  it('renders content', () => {
    const text = 'text';
    render(<VStack>{text}</VStack>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders specified HTML element', () => {
    render(<VStack as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('renders button when React component returning button is passed', () => {
    render(<VStack as={Button} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('supports Button htmlProps if as={Button}', () => {
    render(<VStack as={Button} htmlProps={{ disabled: true }} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('supports Button root props if as={Button}', async () => {
    const onClick = vi.fn();
    render(<VStack as={Button} onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalled();
  });
});
