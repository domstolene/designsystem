import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type ChangeEvent, useState } from 'react';
import { describe, expect, it } from 'vitest';

import { RadioButton, RadioButtonGroup } from '.';

const TestComponent = (
  <RadioButtonGroup defaultValue={1}>
    <RadioButton value={1} label="Test 1" />
    <RadioButton value={2} label="Test 2" />
    <RadioButton value={3} label="Test 3" />
  </RadioButtonGroup>
);

const TestComponentControlled = () => {
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
  describe('<RadioButtonGroup>', () => {
    it('should set default checked uncontrolled state', () => {
      render(TestComponent);
      const radio = screen.getAllByRole('radio')[0];
      expect(radio).toBeChecked();
    });
    it('should get focus on click', async () => {
      render(TestComponent);
      const radio = screen.getAllByRole('radio')[1];
      await userEvent.click(radio);

      expect(radio).toHaveFocus();
    });
    it('should get focus on Tab', async () => {
      render(TestComponent);
      const radio = screen.getAllByRole('radio')[0];
      await userEvent.keyboard('[Tab]');

      expect(radio).toHaveFocus();
    });
    it('should update checked state when clicking a radio button', async () => {
      render(TestComponent);
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

    it('should have accessible description when tip provided', () => {
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

    it('children should have accessible description and aria-invalid when errorMessage provided', () => {
      const groupId = 'groupId';
      const errorMessage = 'errorMessage';
      render(
        <RadioButtonGroup groupId={groupId} errorMessage={errorMessage}>
          <RadioButton />
        </RadioButtonGroup>,
      );
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAccessibleDescription(errorMessage);
      expect(radio).toHaveAttribute('aria-invalid', 'true');
    });
  });
  describe('<RadioButtonGroup> controlled', () => {
    it('should set default checked state', () => {
      render(<TestComponentControlled />);
      const radio = screen.getAllByRole('radio')[0];
      expect(radio).toBeChecked();
    });
    it('should get focus on click', async () => {
      render(<TestComponentControlled />);
      const radio = screen.getAllByRole('radio')[1];
      await userEvent.click(radio);

      expect(radio).toHaveFocus();
    });
    it('should update checked state when clicking a radio button', async () => {
      render(<TestComponentControlled />);
      const radio = screen.getAllByRole('radio')[2];
      await userEvent.click(radio);
      expect(radio).toBeChecked();
    });
  });
});
