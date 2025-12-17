import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { type ChangeEvent, useState } from 'react';
import { describe, expect, it } from 'vitest';

import { ToggleBar, ToggleRadio } from '.';

const TestComponent = () => {
  const [value, setValue] = useState<number | undefined>(1);

  return (
    <ToggleBar
      value={value}
      onChange={(
        _e: ChangeEvent<HTMLInputElement>,
        value: number | undefined,
      ) => {
        setValue(value);
      }}
    >
      <ToggleRadio value={1} label="Test 1" />
      <ToggleRadio value={2} label="Test 2" />
      <ToggleRadio value={3} label="Test 3" />
    </ToggleBar>
  );
};

describe('<ToggleBar>', () => {
  it('sets default checked state', () => {
    render(<TestComponent />);
    const input = screen.getAllByRole('radio')[0];
    expect(input).toBeChecked();
  });

  it('updates checked state when selecting a radio button', async () => {
    render(<TestComponent />);
    const radio = screen.getAllByRole('radio')[2];
    await userEvent.click(radio);
    expect(radio).toBeChecked();
  });
  it('gets focus on click', async () => {
    render(<TestComponent />);
    const radio = screen.getAllByRole('radio')[1];
    await userEvent.click(radio);

    expect(radio).toHaveFocus();
  });
  it('ToggleBar has radiogroup as role', () => {
    render(
      <ToggleBar>
        <ToggleRadio />
      </ToggleBar>,
    );
    const radioGroup = screen.queryByRole('radiogroup');
    expect(radioGroup).toBeInTheDocument();
  });

  it('ToggleBar has aria-labelledby as label id when label provided', () => {
    const label = 'label';
    render(
      <ToggleBar label={label}>
        <ToggleRadio label="test1" />
        <ToggleRadio label="test2" />
      </ToggleBar>,
    );
    expect(screen.getByRole('radiogroup')).toHaveAccessibleName(label);
  });
});
