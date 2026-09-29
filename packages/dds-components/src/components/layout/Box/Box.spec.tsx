import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../../Button';

import { Box } from '.';

describe('<Box>', () => {
  it('renders content', () => {
    const text = 'text';
    render(<Box>{text}</Box>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders specified HTML element', () => {
    render(<Box as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('applies responsive styling', () => {
    const container = render(<Box padding="2rem" />);
    const div = container.container.querySelector('div');
    expect(div).toHaveStyle({ '--dds-r-p': '2rem' });
  });

  it('applies responsive styling for breakpoints', () => {
    const container = render(<Box padding={{ xs: '1rem', sm: '2rem' }} />);
    const div = container.container.querySelector('div');
    expect(div).toHaveStyle({ '--dds-r-xs-p': '1rem', '--dds-r-sm-p': '2rem' });
  });

  it('applies responsive styling with value 0', () => {
    const container = render(<Box padding="0" />);
    const div = container.container.querySelector('div');
    expect(div).toHaveStyle({ '--dds-r-p': '0' });
  });

  it('renders button when React component returning button is passed', () => {
    render(<Box as={Button} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('supports Button props if as={Button}', () => {
    render(<Box as={Button} type="button" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('supports Button htmlProps if as={Button}', () => {
    render(<Box as={Button} htmlProps={{ disabled: true }} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('supports Button root props if as={Button}', async () => {
    const onClick = vi.fn();
    render(<Box as={Button} onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalled();
  });
});
