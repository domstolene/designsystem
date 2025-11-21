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
  it('renders radiobutton', () => {
    render(<RadioButton />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
  });
  it('has a label', () => {
    const label = 'Select me';
    render(<RadioButton label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByRole('radio')).toHaveAccessibleName(label);
  });
  describe('<RadioButtonGroup>', () => {
    it('has accessible name', () => {
      const label = 'label';
      render(
        <RadioButtonGroup label={label}>
          <RadioButton />
        </RadioButtonGroup>,
      );
      expect(screen.getByText(label)).toBeInTheDocument();
      const radiogroup = screen.getByRole('radiogroup');
      expect(radiogroup).toHaveAccessibleName(label);
    });
    it('is selectable', async () => {
      render(
        <RadioButtonGroup>
          <RadioButton value={1} />
          <RadioButton value={2} />
          <RadioButton value={3} />
        </RadioButtonGroup>,
      );
      const radio = screen.getAllByRole('radio')[0];
      expect(radio).not.toBeChecked();
      await userEvent.click(radio);
      expect(radio).toBeChecked();
    });
    it('sets default checked uncontrolled state', () => {
      render(TestComponent);
      const radio = screen.getAllByRole('radio')[0];
      expect(radio).toBeChecked();
    });
    it('gets focus on click', async () => {
      render(TestComponent);
      const radio = screen.getAllByRole('radio')[1];
      await userEvent.click(radio);

      expect(radio).toHaveFocus();
    });
    it('gets focus on Tab', async () => {
      render(TestComponent);
      const radio = screen.getAllByRole('radio')[0];
      await userEvent.keyboard('[Tab]');

      expect(radio).toHaveFocus();
    });
    it('updates checked state when clicking a radio button', async () => {
      render(TestComponent);
      const radio = screen.getAllByRole('radio')[2];
      await userEvent.click(radio);
      expect(radio).toBeChecked();
    });
    it('renders radiogroup', () => {
      render(
        <RadioButtonGroup>
          <RadioButton />
        </RadioButtonGroup>,
      );
      const radioGroup = screen.queryByRole('radiogroup');
      expect(radioGroup).toBeInTheDocument();
    });

    it('has accessible description when tip provided', () => {
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

    it('children have accessible description and aria-invalid when errorMessage provided', () => {
      const groupId = 'groupId';
      const errorMessage = 'errorMessage';
      render(
        <RadioButtonGroup groupId={groupId} errorMessage={errorMessage}>
          <RadioButton />
        </RadioButtonGroup>,
      );
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAccessibleDescription(errorMessage);
      expect(radio).toBeInvalid();
    });
    it('makes all radio buttons required when inside a required radio button group', () => {
      render(
        <RadioButtonGroup required>
          <RadioButton />
          <RadioButton />
        </RadioButtonGroup>,
      );
      const radios = screen.getAllByRole('radio');
      expect(radios[0]).toBeRequired();
      expect(radios[1]).toBeRequired();
    });
    it('disables all radio buttons in a disabled radio button group', async () => {
      render(
        <RadioButtonGroup disabled>
          <RadioButton />
          <RadioButton />
        </RadioButtonGroup>,
      );

      const radios = screen.getAllByRole('radio');

      expect(radios[0]).toBeDisabled();
      expect(radios[1]).toBeDisabled();

      expect(radios[0]).not.toBeChecked();
      await userEvent.click(radios[0]);
      expect(radios[0]).not.toBeChecked();

      expect(radios[1]).not.toBeChecked();
      await userEvent.click(radios[1]);
      expect(radios[1]).not.toBeChecked();
    });

    it('makes all radio buttons inside a read only radio button group read only', async () => {
      render(
        <RadioButtonGroup readOnly>
          <RadioButton value={1} />
          <RadioButton value={2} />
        </RadioButtonGroup>,
      );
      const radios = screen.getAllByRole('radio');

      radios.forEach(radio => {
        expect(radio).toHaveAttribute('aria-readonly', 'true');
      });

      await userEvent.click(radios[0]);
      expect(radios[0]).not.toBeChecked();
    });

    it('selects a radio with keyboard input', async () => {
      render(
        <RadioButtonGroup>
          <RadioButton value={1} />
          <RadioButton value={2} />
          <RadioButton value={3} />
        </RadioButtonGroup>,
      );
      const radio0 = screen.getAllByRole('radio')[0];
      const radio1 = screen.getAllByRole('radio')[1];
      await userEvent.keyboard('[Tab]');
      await userEvent.keyboard('[ArrowRight]');

      expect(radio1).toBeChecked();
      expect(radio0).not.toBeChecked();
    });
  });
  describe('<RadioButtonGroup> controlled', () => {
    it('sets default checked state', () => {
      render(<TestComponentControlled />);
      const radio = screen.getAllByRole('radio')[0];
      expect(radio).toBeChecked();
    });
    it('gets focus on click', async () => {
      render(<TestComponentControlled />);
      const radio = screen.getAllByRole('radio')[1];
      await userEvent.click(radio);

      expect(radio).toHaveFocus();
    });
    it('updates checked state when clicking a radio button', async () => {
      render(<TestComponentControlled />);
      const radio = screen.getAllByRole('radio')[2];
      await userEvent.click(radio);
      expect(radio).toBeChecked();
    });
  });
});
