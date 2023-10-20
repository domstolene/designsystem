import { ComponentProps, useState } from 'react';
import { Calendar } from './Calendar';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import {
  CalendarDate,
  CalendarDateTime,
  ZonedDateTime,
  today,
  DateFormatter,
  isWeekend,
} from '@internationalized/date';

export default {
  title: 'ALPHA/dds-datepicker/Calendar',
  component: Calendar,
  argTypes: {},
};

const norwegianDateFormatter = new DateFormatter('no-NO', {
  dateStyle: 'full',
});

export const Default = (args: Partial<ComponentProps<typeof Calendar>>) => {
  const [date, setDate] = useState<
    CalendarDate | ZonedDateTime | CalendarDateTime
  >(today('Europe/Oslo'));

  return (
    <StoryTemplate title="Calendar - default">
      <Calendar {...args} value={date} onChange={setDate} />
      <p>
        Valgt dato:{' '}
        {date ? norwegianDateFormatter.format(date.toDate('Europe/Oslo')) : ''}
      </p>
    </StoryTemplate>
  );
};

export const UnavailableWeekends = (
  args: Partial<ComponentProps<typeof Calendar>>
) => {
  const [date, setDate] = useState<
    CalendarDate | ZonedDateTime | CalendarDateTime
  >(today('Europe/Oslo').add({ days: 1 }));

  return (
    <StoryTemplate title="Calendar - weekends unavailable">
      <Calendar
        {...args}
        value={date}
        onChange={setDate}
        isDateUnavailable={date => isWeekend(date, 'no-NO')}
      />
      <p>
        Valgt dato:{' '}
        {date ? norwegianDateFormatter.format(date.toDate('Europe/Oslo')) : ''}
      </p>
    </StoryTemplate>
  );
};
