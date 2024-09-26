import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type ChangeEvent, useState } from 'react';
import { describe, expect, it } from 'vitest';

import { RadioButton, RadioButtonGroup } from '.';

const TestComponent = () => {
  const [value, setValue] = useState<number | undefined>(1);

  return (
    <RadioButtonGroup
      value={value}
      onChange={(
        _e: ChangeEvent<HTMLInputElement>,
        value: number | undefined,
      ) => {
        setValue(value);
      }}
    >
      <RadioButton value={1} label="Test 1" />
      <RadioButton value={2} label="Test 2" />
      <RadioButton value={3} label="Test 3" />
    </RadioButtonGroup>
  );
};

describe('<RadioButton>', () => {
  it('should render radiobutton', () => {
    render(<RadioButton />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
  });
  it('should set default checked state', () => {
    render(<TestComponent />);
    const radio = screen.getAllByRole('radio')[0];
    expect(radio).toBeChecked();
  });
  it('should get focus on click', async () => {
    render(<TestComponent />);
    const radio = screen.getAllByRole('radio')[1];
    await userEvent.click(radio);

    expect(radio).toHaveFocus();
  });

  it('should update checked state when selecting a radio button', async () => {
    render(<TestComponent />);
    const radio = screen.getAllByRole('radio')[2];
    await userEvent.click(radio);
    expect(radio).toBeChecked();
  });

  it('should have radiogroup as role', () => {
    render(
      <RadioButtonGroup>
        <RadioButton />
      </RadioButtonGroup>,
    );
    const radioGroup = screen.queryByRole('radiogroup');
    expect(radioGroup).toBeInTheDocument();
  });

  it('RadioButtonGroup should have accessible description when tip provided', () => {
    const groupId = 'groupId';
    const tip = 'tip';
    render(
      <RadioButtonGroup groupId={groupId} tip={tip}>
        <RadioButton />
      </RadioButtonGroup>,
    );
    const radioGroup = screen.getByRole('radiogroup');
    expect(radioGroup).toHaveAccessibleDescription(tip);
  });

  it('children of RadioButtonGroup should have aria-describedby as errorMessage id and aria-invalid when errorMessage provided', () => {
    const groupId = 'groupId';
    render(
      <RadioButtonGroup groupId={groupId} errorMessage="errorMessage">
        <RadioButton />
      </RadioButtonGroup>,
    );
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute(
      'aria-describedby',
      `${groupId}-errorMessage`,
    );
    expect(radio).toHaveAttribute('aria-invalid', 'true');
  });
});
