import { DatePicker, DatePickerProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import {
  CalendarDate,
  DateFormatter,
  Time,
  isWeekend,
  toCalendarDateTime,
  today,
} from '@internationalized/date';
import { useRef, useState } from 'react';
import type { Meta } from '@storybook/react';
import { Button } from '../../Button';
import { Modal } from '../../Modal';
import { HStack, VStack } from '../../Stack';
import { TimePicker } from '../TimePicker';
import { Paragraph } from '../../Typography';
import {
  calendarDateToNativeDate,
  nativeDateToCalendarDate,
} from '../utils/transform';

const meta: Meta<typeof DatePicker> = {
  title: 'dds-components/DatePicker',
  component: DatePicker,
  argTypes: {
    label: {
      control: 'text',
    },
    tip: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    isReadOnly: {
      control: 'boolean',
    },
  },
};

export default meta;

export const Default = (args: Partial<DatePickerProps>) => {
  return (
    <StoryTemplate title="DatePicker - default">
      <DatePicker label="Dato" {...args} />
    </StoryTemplate>
  );
};

export const Required = (args: Partial<DatePickerProps>) => {
  return (
    <StoryTemplate title="DatePicker - default">
      <DatePicker label="Dato" {...args} isRequired />
    </StoryTemplate>
  );
};

export const Controlled = (args: Partial<DatePickerProps>) => {
  const [value, setValue] = useState<CalendarDate | null>(
    new CalendarDate(2023, 8, 28),
  );

  return (
    <StoryTemplate title="DatePicker - controlled">
      <DatePicker label="Dato" {...args} value={value} onChange={setValue} />
      <Button onClick={() => setValue(today('Europe/Oslo'))}>Set today</Button>
    </StoryTemplate>
  );
};

export const WeekendsUnavailable = (args: Partial<DatePickerProps>) => {
  return (
    <StoryTemplate title="DatePicker - weekends unavailable">
      <DatePicker
        label="Dato"
        {...args}
        isDateUnavailable={date => isWeekend(date, 'no-NO')}
      />
    </StoryTemplate>
  );
};

export const Error = (args: Partial<DatePickerProps>) => {
  return (
    <StoryTemplate title="DatePicker - error">
      <DatePicker
        label="Dato"
        {...args}
        errorMessage="Her er noe veldig galt! 😨"
      />
    </StoryTemplate>
  );
};

export const OverviewSizes = (args: Partial<DatePickerProps>) => {
  return (
    <StoryTemplate title="DatePicker - overview sizes">
      <DatePicker {...args} componentSize="medium" label="Medium" />
      <DatePicker {...args} componentSize="small" label="Small" />
      <DatePicker {...args} componentSize="tiny" label="Tiny" />
    </StoryTemplate>
  );
};

export const Tip = (args: Partial<DatePickerProps>) => {
  return (
    <StoryTemplate title="DatePicker - tip">
      <DatePicker
        label="Dato"
        {...args}
        tip="Visste du at denne komponenten også kan ha en tip?"
      />
    </StoryTemplate>
  );
};

export const ReadOnly = (args: Partial<DatePickerProps>) => {
  return (
    <StoryTemplate title="DatePicker - read only">
      <DatePicker
        label="Dato"
        {...args}
        value={new CalendarDate(2023, 12, 24)}
        isReadOnly
      />
    </StoryTemplate>
  );
};

export const Disabled = (args: Partial<DatePickerProps>) => {
  return (
    <StoryTemplate title="DatePicker - disabled">
      <DatePicker label="Dato" {...args} isDisabled />
    </StoryTemplate>
  );
};

export const CustomWidth = (args: Partial<DatePickerProps>) => {
  return (
    <StoryTemplate title="DatePicker - custom width">
      <DatePicker label="Dato" {...args} style={{ width: '1337px' }} />
    </StoryTemplate>
  );
};

export const ControlFocus = (args: Partial<DatePickerProps>) => {
  const ref = useRef<HTMLElement>(null);
  return (
    <VStack gap="x1">
      <DatePicker label="Dato" {...args} ref={ref} />
      <Button onClick={() => ref.current?.focus()}>Fokuser DatePicker</Button>
    </VStack>
  );
};

export const InsideModal = (args: Partial<DatePickerProps>) => {
  const [isOpen, setOpen] = useState(true);
  return (
    <StoryTemplate title="DatePicker - modal">
      <Button onClick={() => setOpen(true)}>Åpne modal</Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <DatePicker label="Dato" {...args} />
      </Modal>
    </StoryTemplate>
  );
};

export const DateAndTime = () => {
  const norwegianDateFormatter = new DateFormatter('no-NO', {
    dateStyle: 'full',
    timeStyle: 'short',
  });
  const [date, setDate] = useState<CalendarDate>(today('Europe/Oslo'));
  const [time, setTime] = useState<Time>(new Time(12, 0, 0));
  const dateTime = toCalendarDateTime(date, time);
  return (
    <StoryTemplate title="DatePicker - date and time">
      <HStack gap="x1">
        <DatePicker
          label="Dato"
          value={date}
          onChange={newValue => setDate(newValue)}
        />
        <TimePicker
          label="Tid"
          value={time}
          onChange={newTime => setTime(newTime)}
        />
      </HStack>
      <Paragraph>
        Valg dato og tid:{' '}
        {norwegianDateFormatter.format(dateTime.toDate('Europe/Oslo'))}
      </Paragraph>
    </StoryTemplate>
  );
};

export const NativeDate = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <DatePicker
      value={nativeDateToCalendarDate(date)}
      onChange={d => setDate(calendarDateToNativeDate(d))}
    />
  );
};
