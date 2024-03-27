import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DatePicker } from './DatePicker';
import { HStack } from '../../Stack';
import { TextInput } from '../../TextInput';

describe('<DatePicker />', () => {
  it('is same height as <TextInput>', () => {
    render(
      <HStack>
        <DatePicker label="Dato" data-testid="datepicker" />
        <TextInput label="Dato" data-testid="textinput" />
      </HStack>,
    );

    const datePicker = screen.getByTestId('datepicker');
    const textInput = screen.getByTestId('textinput');

    const datePickerHeight = datePicker.getBoundingClientRect().height;
    const textInputHeight = textInput.getBoundingClientRect().height;

    expect(datePickerHeight).toBe(textInputHeight);
  });
  it('should render calender button', () => {
    render(<DatePicker />);

    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('calender button should have aria attributes', () => {
    render(<DatePicker />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
  });
  it('should render three spinbuttons for the date', () => {
    render(<DatePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons).toHaveLength(3);
  });
  it('spinbuttons should have aria-valuemin', () => {
    render(<DatePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons[0]).toHaveAttribute('aria-valuemin', '1');
    expect(spinbuttons[1]).toHaveAttribute('aria-valuemin', '1');
    expect(spinbuttons[2]).toHaveAttribute('aria-valuemin', '1');
  });
  it('spinbuttons should have aria-valuemax', () => {
    render(<DatePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons[0]).toHaveAttribute('aria-valuemax', '31');
    expect(spinbuttons[1]).toHaveAttribute('aria-valuemax', '12');
  });
});
