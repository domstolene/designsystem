import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Chip, ChipGroup } from '.';

describe('<Chip />', () => {
  it('Should render text', () => {
    const text = 'text';
    render(<Chip text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('Should remove component from DOM on close', async () => {
    const text = 'text';
    render(<Chip text={text} />);
    const button = screen.getByRole('button');
    await userEvent.click(button!);
    expect(screen.queryByText(text)).not.toBeInTheDocument();
  });
  it('Should have aria-label based on text', () => {
    const text = 'text';
    render(<Chip text={text} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', `Fjern merkelapp ${text}`);
  });
  it('Should have generic aria-label', () => {
    render(<Chip />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Fjern merkelapp');
  });
  it('Should call onClose event', async () => {
    const event = vi.fn();
    render(<Chip onClose={event} />);
    const button = screen.getByRole('button');
    await userEvent.click(button!);
    expect(event).toHaveBeenCalled();
  });
  it('Should render <ul> with a <li> child', () => {
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
