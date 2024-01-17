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

describe('<RadioButton />', () => {
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

  it('should have radiogroup as role', () => {
    render(
      <RadioButtonGroup>
        <RadioButton />
      </RadioButtonGroup>,
    );
    const radioGroup = screen.queryByRole('radiogroup');
    expect(radioGroup).toBeInTheDocument();
  });

  it('RadioButtonGroup should have aria-describedby as tip id when tip provided', () => {
    const groupId = 'groupId';
    render(
      <RadioButtonGroup groupId={groupId} tip="tip">
        <RadioButton label="test" />
      </RadioButtonGroup>,
    );
    const radioGroup = screen.getByRole('radiogroup');
    expect(radioGroup).toHaveAttribute('aria-describedby', `${groupId}-tip`);
  });

  it('children of RadioButtonGroup should have aria-describedby as errorMessage id and aria-invalid when errorMessage provided', () => {
    const groupId = 'groupId';
    render(
      <RadioButtonGroup groupId={groupId} errorMessage="errorMessage">
        <RadioButton label="Test" />
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
