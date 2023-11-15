import { DatePicker, DatePickerProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { CalendarDate, isWeekend, today } from '@internationalized/date';
import { useState } from 'react';
import { Button } from '@norges-domstoler/dds-components';

export default {
  title: 'ALPHA/dds-datepicker/DatePicker',
  component: DatePicker,
};

export const Default = (args: Partial<DatePickerProps<CalendarDate>>) => {
  return (
    <StoryTemplate title="DatePicker - default">
      <DatePicker {...args} />
    </StoryTemplate>
  );
};

export const Controlled = (args: Partial<DatePickerProps<CalendarDate>>) => {
  const [value, setValue] = useState<CalendarDate | null>(
    new CalendarDate(2023, 8, 28),
  );

  return (
    <StoryTemplate title="DatePicker - controlled">
      <DatePicker {...args} value={value} onChange={setValue} />
      <Button onClick={() => setValue(today('Europe/Oslo'))}>Set today</Button>
    </StoryTemplate>
  );
};

export const WeekendsUnavailable = (
  args: Partial<DatePickerProps<CalendarDate>>,
) => {
  return (
    <StoryTemplate title="DatePicker - weekends unavailable">
      <DatePicker
        {...args}
        isDateUnavailable={date => isWeekend(date, 'no-NO')}
      />
    </StoryTemplate>
  );
};

export const Error = (args: Partial<DatePickerProps<CalendarDate>>) => {
  return (
    <StoryTemplate title="DatePicker - error">
      <DatePicker {...args} errorMessage="Dato er påkrevd!" />
    </StoryTemplate>
  );
};

export const Sizes = (args: Partial<DatePickerProps<CalendarDate>>) => {
  return (
    <StoryTemplate title="DatePicker - sizes">
      <DatePicker {...args} componentSize="medium" label="Medium" />
      <DatePicker {...args} componentSize="small" label="Small" />
      <DatePicker {...args} componentSize="tiny" label="Tiny" />
    </StoryTemplate>
  );
};

export const Tip = (args: Partial<DatePickerProps<CalendarDate>>) => {
  return (
    <StoryTemplate title="DatePicker - tip">
      <DatePicker
        {...args}
        tip="Visste du at denne komponenten også kan ha en tip?"
      />
    </StoryTemplate>
  );
};
