import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { ChangeEvent, useState } from 'react';
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

describe('<ToggleBar />', () => {
  it('should set default checked state', () => {
    render(<TestComponent />);
    const input = screen.getAllByRole('radio')[0];
    expect(input).toBeChecked();
  });

  it('should update checked state when selecting a radio button', async () => {
    render(<TestComponent />);
    const radio = screen.getAllByRole('radio')[2];
    await userEvent.click(radio);
    expect(radio).toBeChecked();
  });

  it('ToggleBar should have radiogroup as role', () => {
    render(
      <ToggleBar>
        <ToggleRadio />
      </ToggleBar>,
    );
    const radioGroup = screen.queryByRole('radiogroup');
    expect(radioGroup).toBeInTheDocument();
  });

  it('ToggleBar should have aria-labelledby as label id when label provided', () => {
    const id = 'id';
    render(
      <ToggleBar id={id} label="label">
        <ToggleRadio label="test1" />
        <ToggleRadio label="test2" />
      </ToggleBar>,
    );
    const radioGroup = screen.getByRole('radiogroup');
    expect(radioGroup).toHaveAttribute('aria-labelledby', `${id}-label`);
  });
});
