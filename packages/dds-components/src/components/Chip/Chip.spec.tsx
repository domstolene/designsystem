import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Chip, ChipGroup } from '.';

describe('<Chip>', () => {
  it('renders text', () => {
    const text = 'text';
    render(<Chip text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('removes component from DOM on close', async () => {
    const text = 'text';
    render(<Chip text={text} />);
    const button = screen.getByRole('button');
    await userEvent.click(button!);
    expect(screen.queryByText(text)).not.toBeInTheDocument();
  });
  it('has aria-label based on text', () => {
    const text = 'text';
    render(<Chip text={text} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', `Fjern merkelapp ${text}`);
  });
  it('has generic aria-label', () => {
    render(<Chip />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Fjern merkelapp');
  });
  it('calls onClose event', async () => {
    const event = vi.fn();
    render(<Chip onClose={event} />);
    const button = screen.getByRole('button');
    await userEvent.click(button!);
    expect(event).toHaveBeenCalled();
  });
  it('renders list with a list item child', () => {
    render(
      <ChipGroup>
        <Chip />
      </ChipGroup>,
    );
    const list = screen.getByRole('list');
    const listitem = screen.getByRole('listitem');
    expect(list).toBeInTheDocument();
    expect(list).toContainElement(listitem);
  });
});
