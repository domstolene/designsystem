import {
  CalendarDate,
  DateFormatter,
  Time,
  isWeekend,
  toCalendarDateTime,
  today,
} from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react';
import { useRef, useState } from 'react';

import { Button } from '../../Button';
import { Modal } from '../../Modal';
import { StoryHStack, StoryVStack } from '../../Stack/utils';
import { Paragraph } from '../../Typography';
import { TimePicker } from '../TimePicker';
import {
  calendarDateToNativeDate,
  nativeDateToCalendarDate,
} from '../utils/transform';

import { DatePicker } from '.';

const meta: Meta<typeof DatePicker> = {
  title: 'dds-components/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      story: { inline: true, height: '500px' },
      canvas: { sourceState: 'hidden' },
    },
  },
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
    width: {
      control: 'text',
    },
    showWeekNumbers: {
      control: 'boolean',
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

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: { label: 'Dato' },
};

export const Overview: Story = {
  args: { label: 'Label' },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <DatePicker {...args} />
        <DatePicker {...args} isRequired />
        <DatePicker
          {...args}
          errorMessage={
            args.errorMessage ?? 'Dette er en feilmelding ved valideringsfeil'
          }
        />
      </StoryVStack>
      <StoryVStack>
        <DatePicker {...args} isDisabled />
        <DatePicker {...args} isReadOnly />
        <DatePicker {...args} tip={args.tip ?? 'Dette er en hjelpetekst'} />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const Required: Story = {
  args: { label: 'Dato', isRequired: true },
};

export const Controlled: Story = {
  args: { label: 'Dato' },
  render: args => {
    const [value, setValue] = useState<CalendarDate | null>(
      new CalendarDate(2023, 8, 28),
    );

    return (
      <StoryVStack>
        <DatePicker label="Dato" {...args} value={value} onChange={setValue} />
        <Button onClick={() => setValue(today('Europe/Oslo'))}>
          Set today
        </Button>
      </StoryVStack>
    );
  },
};

export const WeekendsUnavailable: Story = {
  args: { label: 'Dato', isDateUnavailable: date => isWeekend(date, 'no-NO') },
};

export const Error: Story = {
  args: { label: 'Dato', errorMessage: 'Her er noe veldig galt! 😨' },
};

export const OverviewSizes: Story = {
  render: args => (
    <StoryVStack>
      <DatePicker {...args} componentSize="medium" label="Medium" />
      <DatePicker {...args} componentSize="small" label="Small" />
      <DatePicker {...args} componentSize="xsmall" label="Tiny" />
    </StoryVStack>
  ),
};

export const Tip: Story = {
  args: {
    label: 'Dato',
    tip: 'Visste du at denne komponenten også kan ha en tip?',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Dato',
    isReadOnly: true,
    value: new CalendarDate(2023, 12, 24),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Dato',
    isDisabled: true,
    value: new CalendarDate(2023, 12, 24),
  },
};

export const CustomWidth: Story = {
  args: { label: 'Dato', width: '1337px' },
};

export const ControlFocus: Story = {
  args: { label: 'Dato' },
  render: args => {
    const ref = useRef<HTMLElement>(null);
    return (
      <StoryVStack>
        <DatePicker label="Dato" {...args} ref={ref} />
        <Button onClick={() => ref.current?.focus()}>Fokuser DatePicker</Button>
      </StoryVStack>
    );
  },
};

export const InsideModal: Story = {
  args: { label: 'Dato' },
  render: args => {
    const [isOpen, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Åpne modal</Button>
        <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
          <DatePicker label="Dato" {...args} />
        </Modal>
      </>
    );
  },
};

export const DateAndTime: Story = {
  args: { label: 'Dato' },
  render: args => {
    const norwegianDateFormatter = new DateFormatter('no-NO', {
      dateStyle: 'full',
      timeStyle: 'short',
    });
    const [date, setDate] = useState<CalendarDate>(today('Europe/Oslo'));
    const [time, setTime] = useState<Time>(new Time(12, 0, 0));
    const dateTime = toCalendarDateTime(date, time);
    return (
      <StoryVStack>
        <StoryHStack>
          <DatePicker
            {...args}
            value={date}
            onChange={newValue => newValue !== null && setDate(newValue)}
          />
          <TimePicker
            label="Tid"
            value={time}
            onChange={newTime => newTime !== null && setTime(newTime)}
          />
        </StoryHStack>
        <Paragraph>
          Valg dato og tid:{' '}
          {norwegianDateFormatter.format(dateTime.toDate('Europe/Oslo'))}
        </Paragraph>
      </StoryVStack>
    );
  },
};

export const NativeDate: Story = {
  args: { label: 'Dato' },
  render: args => {
    const [date, setDate] = useState<Date>(new Date());
    return (
      <DatePicker
        {...args}
        value={nativeDateToCalendarDate(date)}
        onChange={d => d !== null && setDate(calendarDateToNativeDate(d))}
      />
    );
  },
};
