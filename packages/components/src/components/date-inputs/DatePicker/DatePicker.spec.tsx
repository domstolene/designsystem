import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DatePicker } from './DatePicker';
import { HStack } from '../../Stack';
import { TextInput } from '../../TextInput';

describe('<DatePicker>', () => {
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
});
