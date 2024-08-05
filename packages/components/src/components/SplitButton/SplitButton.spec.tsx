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

interface props {
  primaryAction: SplitButtonPrimaryActionProps;
  secondaryActions: SplitButtonSecondaryActionsProps;
}

function TestComponent({ primaryAction, secondaryActions }: props) {
  return (
    <SplitButton
      primaryAction={primaryAction}
      secondaryActions={secondaryActions}
    />
  );
}

describe('<SplitButton>', () => {
  it('should show OverflowMenu on menu button click', async () => {
    render(<TestComponent secondaryActions={item} primaryAction={primary} />);
    const menu = screen.queryByRole('menu');
    expect(menu).not.toBeInTheDocument();
    const menuButton = screen.getByLabelText('Åpne liste med flere valg');

    await userEvent.click(menuButton!);

    const menuOpened = screen.getByRole('menu');
    expect(menuOpened).toHaveAttribute('aria-hidden', 'false');
  });

  it('should run onclick event from primary action button', async () => {
    const event = vi.fn();
    render(
      <TestComponent
        secondaryActions={item}
        primaryAction={{ children: primaryText, onClick: event }}
      />,
    );

    const button = screen.getByText(primaryText);
    await userEvent.click(button!);

    expect(event).toHaveBeenCalled();
  });

  it('should run onclick event from context menu', async () => {
    const event = vi.fn();
    render(
      <TestComponent
        secondaryActions={[{ children: itemText, onClick: event }]}
        primaryAction={primary}
      />,
    );

    const item = screen.getByText(itemText);
    await userEvent.click(item!);

    expect(event).toHaveBeenCalled();
  });

  it('should hide menu after Esc keydown', async () => {
    render(<TestComponent secondaryActions={item} primaryAction={primary} />);
    const menuButton = screen.getByLabelText('Åpne liste med flere valg');
    fireEvent.click(menuButton!);
    const menuOpened = screen.getByRole('menu');
    expect(menuOpened).toHaveAttribute('aria-hidden', 'false');

    await userEvent.keyboard('[Escape]');

    const elQuery = screen.queryByRole('menu');
    expect(elQuery).not.toBeInTheDocument();
  });
});
