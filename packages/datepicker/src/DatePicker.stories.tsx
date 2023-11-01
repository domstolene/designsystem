import { DatePicker, DatePickerProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { CalendarDate, today } from '@internationalized/date';
import { useState } from 'react';
import { Button } from '@norges-domstoler/dds-components';
import { DateValue } from '@react-aria/calendar';

export default {
  title: 'ALPHA/dds-datepicker/DatePicker',
  component: DatePicker,
  argTypes: {
    label: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
  },
};

export const Default = (args: Partial<DatePickerProps<CalendarDate>>) => {
  return (
    <StoryTemplate title="DatePicker - default">
      <DatePicker {...args} />
    </StoryTemplate>
  );
};

export const Controlled = (args: Partial<DatePickerProps<CalendarDate>>) => {
  const [value, setValue] = useState<DateValue | null>(today('Europe/Oslo'));

  return (
    <StoryTemplate title="DatePicker - controlled">
      <DatePicker {...args} value={value} onChange={setValue} />
      <Button onClick={() => setValue(today('Europe/Oslo'))}>Set today</Button>
    </StoryTemplate>
  );
};
