import { act, fireEvent, render, screen } from '@testing-library/react';
import { SplitButton } from '.';

const primaryText = 'primaryText';
const primary = { label: primaryText, onClick: () => {} };
const itemText = 'text';
const item = { title: itemText, onClick: () => {} };

type props = {
  primaryAction: { label: string; onClick?: () => void };
  secondaryActions: { title: string; onClick?: () => void };
};

function TestComponent({ primaryAction, secondaryActions }: props) {
  return (
    <SplitButton
      primaryAction={primaryAction}
      secondaryActions={[secondaryActions]}
    />
  );
}

describe('<OverflowMenu />', () => {
  it('should show OverflowMenu on menu button click', () => {
    render(<TestComponent secondaryActions={item} primaryAction={primary} />);
    const menu = screen.queryByRole('menu');
    expect(menu).not.toBeInTheDocument();
    const menuButton = screen.getByLabelText('Åpne liste med flere valg');

    act(() => {
      fireEvent.click(menuButton!);
    });

    const menuOpened = screen.getByRole('menu');
    expect(menuOpened).toHaveAttribute('aria-hidden', 'false');
  });

  it('should run onclick event from primary action button', () => {
    const event = jest.fn();
    render(
      <TestComponent
        secondaryActions={item}
        primaryAction={{ label: primaryText, onClick: event }}
      />
    );

    const button = screen.getByText(primaryText);
    act(() => {
      fireEvent.click(button!);
    });

    expect(event).toHaveBeenCalled();
  });

  it('should run onclick event from context menu', () => {
    const event = jest.fn();
    render(
      <TestComponent
        secondaryActions={{ title: itemText, onClick: event }}
        primaryAction={primary}
      />
    );

    const item = screen.getByText(itemText);
    act(() => {
      fireEvent.click(item!);
    });

    expect(event).toHaveBeenCalled();
  });

  it('should hide menu after Esc keydown', () => {
    render(<TestComponent secondaryActions={item} primaryAction={primary} />);
    const menuButton = screen.getByLabelText('Åpne liste med flere valg');
    fireEvent.click(menuButton!);
    const menuOpened = screen.getByRole('menu');
    expect(menuOpened).toHaveAttribute('aria-hidden', 'false');

    act(() => {
      fireEvent.keyDown(menuOpened, { key: 'Escape', code: 'Escape' });
    });

    const elQuery = screen.queryByRole('menu');
    expect(elQuery).not.toBeInTheDocument();
  });
});
