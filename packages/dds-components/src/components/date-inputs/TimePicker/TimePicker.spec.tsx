import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TimePicker } from './TimePicker';
import { HStack } from '../../layout';
import { TextInput } from '../../TextInput';

describe('<TimePicker />', () => {
  it('is same height as <TextInput>', () => {
    render(
      <HStack>
        <TimePicker label="Dato" data-testid="timepicker" />
        <TextInput label="Dato" data-testid="textinput" />
      </HStack>,
    );

    const timePicker = screen.getByTestId('timepicker');
    const textInput = screen.getByTestId('textinput');

    const timePickerHeight = timePicker.getBoundingClientRect().height;
    const textInputHeight = textInput.getBoundingClientRect().height;

    expect(timePickerHeight).toBe(textInputHeight);
  });
  it('should render three spinbuttons for the time', () => {
    render(<TimePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons).toHaveLength(2);
  });
  it('spinbuttons should have aria-valuemin', () => {
    render(<TimePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons[0]).toHaveAttribute('aria-valuemin', '0');
    expect(spinbuttons[1]).toHaveAttribute('aria-valuemin', '0');
  });
  it('spinbuttons should have aria-valuemax', () => {
    render(<TimePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons[0]).toHaveAttribute('aria-valuemax', '23');
    expect(spinbuttons[1]).toHaveAttribute('aria-valuemax', '59');
  });
});
