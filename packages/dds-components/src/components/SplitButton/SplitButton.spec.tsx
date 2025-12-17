import { fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import {
  SplitButton,
  type SplitButtonPrimaryActionProps,
  type SplitButtonSecondaryActionsProps,
} from '.';

const primaryText = 'primaryText';
const primary: SplitButtonPrimaryActionProps = {
  children: primaryText,
  onClick: () => null,
};
const itemText = 'text';
const item: SplitButtonSecondaryActionsProps = [
  { children: itemText, onClick: () => null },
];

describe('<SplitButton>', () => {
  it('renders two buttons', () => {
    render(<SplitButton primaryAction={primary} secondaryActions={item} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
  it('shows OverflowMenu on menu button click', async () => {
    render(<SplitButton primaryAction={primary} secondaryActions={item} />);
    const menu = screen.queryByRole('menu');
    expect(menu).not.toBeInTheDocument();
    const menuButton = screen.getByLabelText('Flere handlinger');

    await userEvent.click(menuButton!);

    const menuOpened = screen.getByRole('menu');
    expect(menuOpened).toHaveAttribute('aria-hidden', 'false');
  });

  it('calls onclick event from primary action button', async () => {
    const event = vi.fn();
    render(
      <SplitButton
        primaryAction={{ children: primaryText, onClick: event }}
        secondaryActions={item}
      />,
    );

    const button = screen.getByText(primaryText);
    await userEvent.click(button!);

    expect(event).toHaveBeenCalled();
  });

  it('calls onclick event from context menu', async () => {
    const event = vi.fn();
    render(
      <SplitButton
        primaryAction={primary}
        secondaryActions={[{ children: itemText, onClick: event }]}
      />,
    );

    const item = screen.getByText(itemText);
    await userEvent.click(item!);

    expect(event).toHaveBeenCalled();
  });

  it('hides menu after Esc keydown', async () => {
    render(<SplitButton secondaryActions={item} primaryAction={primary} />);
    const menuButton = screen.getByLabelText('Flere handlinger');
    fireEvent.click(menuButton!);
    const menuOpened = screen.getByRole('menu');
    expect(menuOpened).toHaveAttribute('aria-hidden', 'false');

    await userEvent.keyboard('[Escape]');

    const elQuery = screen.queryByRole('menu');
    expect(elQuery).not.toBeInTheDocument();
  });
});
