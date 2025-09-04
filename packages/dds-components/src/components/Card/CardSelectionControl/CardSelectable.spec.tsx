import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';

import { CardSelectable, CardSelectableGroup } from '.';

const TestComponentRadio = (
  <CardSelectableGroup cardType="radio" defaultValue={1}>
    <CardSelectable value={1}> Test 1 </CardSelectable>
    <CardSelectable value={2}> Test 2 </CardSelectable>
    <CardSelectable value={3}> Test 3 </CardSelectable>
  </CardSelectableGroup>
);

const TestComponentCheckbox = (
  <CardSelectableGroup cardType="checkbox">
    <CardSelectable value={1}> Test 1 </CardSelectable>
    <CardSelectable value={2}> Test 2 </CardSelectable>
    <CardSelectable value={3}> Test 3 </CardSelectable>
  </CardSelectableGroup>
);

const TestComponentRadioControlled = () => {
  const [value, setValue] = useState<number | undefined>(1);

  return (
    <CardSelectableGroup
      cardType="radio"
      value={value}
      onChange={(value: number | undefined) => {
        setValue(value);
      }}
    >
      <CardSelectable value={1}> Test 1 </CardSelectable>
      <CardSelectable value={2}> Test 2 </CardSelectable>
      <CardSelectable value={3}> Test 3 </CardSelectable>
    </CardSelectableGroup>
  );
};

describe('<CardSelectable>', () => {
  describe('radio', () => {
    it('should render radiobutton', () => {
      render(<CardSelectable cardType="radio" />);
      expect(screen.getByRole('radio')).toBeInTheDocument();
    });
    it('should have a label', () => {
      const label = 'Select me';
      render(<CardSelectable cardType="radio"> {label} </CardSelectable>);
      expect(screen.getByText(label)).toBeInTheDocument();
    });
    it('should be disabled', async () => {
      render(<CardSelectable cardType="radio" disabled />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeDisabled();
      expect(radio).not.toBeChecked();
      await userEvent.click(radio);
      expect(radio).not.toBeChecked();
    });
    it('should be required', async () => {
      render(<CardSelectable cardType="radio" required />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeRequired();
    });
  });
  describe('checkbox', () => {
    it('should render checkbox', () => {
      render(<CardSelectable cardType="checkbox" />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });
    it('should have a label', () => {
      const label = 'Select me';
      render(<CardSelectable cardType="checkbox"> {label} </CardSelectable>);
      expect(screen.getByText(label)).toBeInTheDocument();
    });
    it('should be disabled', async () => {
      render(<CardSelectable cardType="checkbox" disabled />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeDisabled();
      expect(checkbox).not.toBeChecked();
      await userEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
    it('should be required', async () => {
      render(<CardSelectable cardType="checkbox" required />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeRequired();
    });
    it('should be selectable', async () => {
      render(<CardSelectable cardType="checkbox" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    });
    it('should get focus on click', async () => {
      render(<CardSelectable cardType="checkbox" />);
      const checkbox = screen.getByRole('checkbox');
      await userEvent.click(checkbox);

      expect(checkbox).toHaveFocus();
    });
  });
  describe('<CardSelectableGroup cardType="radio">', () => {
    it('should set default checked uncontrolled state', () => {
      render(TestComponentRadio);
      const radio = screen.getAllByRole('radio')[0];
      expect(radio).toBeChecked();
    });
    it('should get focus on click', async () => {
      render(TestComponentRadio);
      const radio = screen.getAllByRole('radio')[1];
      await userEvent.click(radio);

      expect(radio).toHaveFocus();
    });
    it('should get focus on Tab', async () => {
      render(TestComponentRadio);
      const radio = screen.getAllByRole('radio')[0];
      await userEvent.keyboard('[Tab]');

      expect(radio).toHaveFocus();
    });
    it('should update checked state when clicking a radio button', async () => {
      render(TestComponentRadio);
      const radio = screen.getAllByRole('radio')[2];
      await userEvent.click(radio);
      expect(radio).toBeChecked();
    });
    it('should have radiogroup as role', () => {
      render(
        <CardSelectableGroup cardType="radio">
          <CardSelectable />
        </CardSelectableGroup>,
      );
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    });
    it('should make children disabled', () => {
      render(
        <CardSelectableGroup disabled cardType="radio">
          <CardSelectable />
          <CardSelectable />
        </CardSelectableGroup>,
      );
      const radios = screen.getAllByRole('radio');

      radios.forEach(radio => {
        expect(radio).toBeDisabled();
      });
    });
    it('should make children readOnly', () => {
      render(
        <CardSelectableGroup readOnly cardType="radio">
          <CardSelectable />
          <CardSelectable />
        </CardSelectableGroup>,
      );
      const radios = screen.getAllByRole('radio');

      radios.forEach(radio => {
        expect(radio).toHaveAttribute('aria-readonly', 'true');
      });
    });
    it('should give children name attribute', () => {
      const name = 'name';
      render(
        <CardSelectableGroup name={name} cardType="radio">
          <CardSelectable />
          <CardSelectable />
        </CardSelectableGroup>,
      );
      const radios = screen.getAllByRole('radio');

      radios.forEach(radio => {
        expect(radio).toHaveAttribute('name', name);
      });
    });

    it('should have accessible description when tip provided', () => {
      const tip = 'tip';
      const tipId = 'tipId';
      render(
        <>
          <span id={tipId}>{tip}</span>
          <CardSelectableGroup cardType="radio" tipId={tipId}>
            <CardSelectable />
          </CardSelectableGroup>
          ,
        </>,
      );
      const radioGroup = screen.getByRole('radiogroup');
      expect(radioGroup).toHaveAccessibleDescription(tip);

      const radios = screen.getAllByRole('radio');
      radios.forEach(radio => {
        expect(radio).toHaveAccessibleDescription(tip);
      });
    });

    it('children should have accessible description and be invalid when errorMessage provided', () => {
      const errorMessage = 'errorMessage';
      render(
        <CardSelectableGroup cardType="radio" errorMessage={errorMessage}>
          <CardSelectable />
        </CardSelectableGroup>,
      );
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAccessibleDescription(errorMessage);
      expect(radio).toBeInvalid();
    });
  });
  describe('<CardSelectableGroup cardType="radio"> controlled', () => {
    it('should set default checked state', () => {
      render(<TestComponentRadioControlled />);
      const radio = screen.getAllByRole('radio')[0];
      expect(radio).toBeChecked();
    });
    it('should get focus on click', async () => {
      render(<TestComponentRadioControlled />);
      const radio = screen.getAllByRole('radio')[1];
      await userEvent.click(radio);

      expect(radio).toHaveFocus();
    });
    it('should update checked state when clicking a radio button', async () => {
      render(<TestComponentRadioControlled />);
      const radio = screen.getAllByRole('radio')[2];
      await userEvent.click(radio);
      expect(radio).toBeChecked();
    });
  });
  describe('<CardSelectableGroup cardType="checkbox">', () => {
    it('should get focus on click', async () => {
      render(TestComponentCheckbox);
      const checkbox = screen.getAllByRole('checkbox')[1];
      await userEvent.click(checkbox);

      expect(checkbox).toHaveFocus();
    });
    it('should get focus on Tab', async () => {
      render(TestComponentCheckbox);
      const checkbox = screen.getAllByRole('checkbox')[0];
      await userEvent.keyboard('[Tab]');

      expect(checkbox).toHaveFocus();
    });
    it('should update checked state when clicking a checkbox button', async () => {
      render(TestComponentCheckbox);
      const checkbox = screen.getAllByRole('checkbox')[2];
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    });
    it('should have group as role', () => {
      render(
        <CardSelectableGroup cardType="checkbox">
          <CardSelectable />
        </CardSelectableGroup>,
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });
    it('should make children disabled', () => {
      render(
        <CardSelectableGroup disabled cardType="checkbox">
          <CardSelectable />
          <CardSelectable />
        </CardSelectableGroup>,
      );
      const checkboxes = screen.getAllByRole('checkbox');

      checkboxes.forEach(checkbox => {
        expect(checkbox).toBeDisabled();
      });
    });
    it('should make children readOnly', () => {
      render(
        <CardSelectableGroup readOnly cardType="checkbox">
          <CardSelectable />
          <CardSelectable />
        </CardSelectableGroup>,
      );
      const checkboxes = screen.getAllByRole('checkbox');

      checkboxes.forEach(checkbox => {
        expect(checkbox).toHaveAttribute('aria-readonly', 'true');
      });
    });

    it('should have accessible description when tip provided', () => {
      const tip = 'tip';
      const tipId = 'tipId';
      render(
        <>
          <span id={tipId}>{tip}</span>
          <CardSelectableGroup cardType="checkbox" tipId={tipId}>
            <CardSelectable />
          </CardSelectableGroup>
          ,
        </>,
      );
      const checkboxGroup = screen.getByRole('group');
      expect(checkboxGroup).toHaveAccessibleDescription(tip);

      const checkboxes = screen.getAllByRole('checkbox');
      checkboxes.forEach(checkbox => {
        expect(checkbox).toHaveAccessibleDescription(tip);
      });
    });

    it('children should have accessible description and be invalid when errorMessage provided', () => {
      const errorMessage = 'errorMessage';
      render(
        <CardSelectableGroup cardType="checkbox" errorMessage={errorMessage}>
          <CardSelectable />
        </CardSelectableGroup>,
      );
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAccessibleDescription(errorMessage);
      expect(checkbox).toBeInvalid();
    });
  });
});
