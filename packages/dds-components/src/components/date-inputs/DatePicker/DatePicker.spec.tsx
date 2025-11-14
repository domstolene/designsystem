import { CalendarDate } from '@internationalized/date';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DatePicker, type DatePickerProps } from './DatePicker';
import { HStack } from '../../layout';
import { TextInput } from '../../TextInput';
import { ThemeProvider } from '../../ThemeProvider';

const WrappedDatePicker = (props: DatePickerProps) => (
  <ThemeProvider>
    <DatePicker {...props} />
  </ThemeProvider>
);

describe('<DatePicker>', () => {
  it('is same height as <TextInput>', () => {
    render(
      <HStack>
        <ThemeProvider>
          <DatePicker label="Dato" data-testid="datepicker" />
        </ThemeProvider>
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
    render(<WrappedDatePicker />);

    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('calendar button should have aria attributes', () => {
    render(<WrappedDatePicker />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
  });

  it('renders date segments in Norwegian format (day, month, year)', () => {
    render(<WrappedDatePicker />);

    const segments = screen.getAllByRole('spinbutton');

    expect(segments).toHaveLength(3);

    expect(segments[0]).toHaveAccessibleName(/dag/i);
    expect(segments[1]).toHaveAccessibleName(/måned/i);
    expect(segments[2]).toHaveAccessibleName(/år/i);
  });

  it('renders date segments with Norwegian placeholders', () => {
    render(<WrappedDatePicker />);

    const segments = screen.getAllByRole('spinbutton');
    expect(segments).toHaveLength(3);

    const expectedPlaceholders = ['dd', 'mm', 'åååå'];

    segments.forEach((segment, index) => {
      const hiddenSpan = segment.querySelector('span[aria-hidden="true"]');
      expect(hiddenSpan).not.toBeNull();
      expect(hiddenSpan?.textContent).toBe(expectedPlaceholders[index]);
    });
  });

  it('should render three spinbuttons for the date', () => {
    render(<WrappedDatePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons).toHaveLength(3);
  });
  it('spinbuttons should have aria-valuemin', () => {
    render(<WrappedDatePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons[0]).toHaveAttribute('aria-valuemin', '1');
    expect(spinbuttons[1]).toHaveAttribute('aria-valuemin', '1');
    expect(spinbuttons[2]).toHaveAttribute('aria-valuemin', '1');
  });
  it('spinbuttons should have aria-valuemax', () => {
    render(<WrappedDatePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons[0]).toHaveAttribute('aria-valuemax');
    expect(spinbuttons[1]).toHaveAttribute('aria-valuemax', '12');
  });
  it('spinbuttons should have accesible description if error message present', () => {
    const errorMessage = 'error';
    render(<WrappedDatePicker errorMessage={errorMessage} />);

    const spinbuttons = screen.getAllByRole('spinbutton');

    spinbuttons.forEach(sb => {
      expect(sb).toHaveAccessibleDescription(errorMessage);
    });
  });

  it('spinbuttons should have accesible description if tip present', () => {
    const tip = 'tip';
    render(<WrappedDatePicker tip={tip} />);

    const spinbuttons = screen.getAllByRole('spinbutton');

    spinbuttons.forEach(sb => {
      expect(sb).toHaveAccessibleDescription(tip);
    });
  });
  it('spinbuttons should render error message', () => {
    const errorMessage = 'error';
    render(<WrappedDatePicker errorMessage={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('spinbuttons should render tip', () => {
    const tip = 'tip';
    render(<WrappedDatePicker tip={tip} />);

    expect(screen.getByText(tip)).toBeInTheDocument();
  });

  it('clear button is not rendered if no value', () => {
    render(<WrappedDatePicker clearable />);

    const clearButton = screen.queryByRole('button', { name: /Tøm dato/i });
    expect(clearButton).not.toBeInTheDocument();
  });
  it('clear button is rendered if there is value', () => {
    render(
      <WrappedDatePicker clearable value={new CalendarDate(2023, 8, 28)} />,
    );

    const clearButton = screen.queryByRole('button', { name: /Tøm dato/i });
    expect(clearButton).toBeInTheDocument();
  });
});
