import {
  CalendarDate,
  DateFormatter,
  Time,
  isWeekend,
  toCalendarDateTime,
  today,
} from '@internationalized/date';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import type { Meta, StoryObj } from '@storybook/react';
import { useRef, useState } from 'react';

import { Button } from '../../Button';
import { Modal } from '../../Modal';
import { HStack, VStack } from '../../Stack';
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
      story: { inline: true },
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
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: { label: 'Label' },
  decorators: Story => (
    <StoryTemplate display="grid" $columnsAmount={2}>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <DatePicker {...args} />
      <DatePicker {...args} isRequired />
      <DatePicker {...args} isDisabled />
      <DatePicker {...args} isReadOnly />
      <DatePicker
        {...args}
        errorMessage={
          args.errorMessage ?? 'Dette er en feilmelding ved valideringsfeil'
        }
      />
      <DatePicker {...args} tip={args.tip ?? 'Dette er en hjelpetekst'} />
    </>
  ),
};

export const Required: Story = {
  args: { label: 'Dato', isRequired: true },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Controlled: Story = {
  args: { label: 'Dato' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const [value, setValue] = useState<CalendarDate | null>(
      new CalendarDate(2023, 8, 28),
    );

    return (
      <>
        <DatePicker label="Dato" {...args} value={value} onChange={setValue} />
        <Button onClick={() => setValue(today('Europe/Oslo'))}>
          Set today
        </Button>
      </>
    );
  },
};

export const WeekendsUnavailable: Story = {
  args: { label: 'Dato', isDateUnavailable: date => isWeekend(date, 'no-NO') },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Error: Story = {
  args: { label: 'Dato', errorMessage: 'Her er noe veldig galt! 😨' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const OverviewSizes: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <DatePicker {...args} componentSize="medium" label="Medium" />
      <DatePicker {...args} componentSize="small" label="Small" />
      <DatePicker {...args} componentSize="tiny" label="Tiny" />
    </>
  ),
};

export const Tip: Story = {
  args: {
    label: 'Dato',
    tip: 'Visste du at denne komponenten også kan ha en tip?',
  },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const ReadOnly: Story = {
  args: {
    label: 'Dato',
    isReadOnly: true,
    value: new CalendarDate(2023, 12, 24),
  },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Dato',
    isDisabled: true,
    value: new CalendarDate(2023, 12, 24),
  },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const CustomWidth: Story = {
  args: { label: 'Dato', width: '1337px' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const ControlFocus: Story = {
  args: { label: 'Dato' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const ref = useRef<HTMLElement>(null);
    return (
      <VStack gap="x1">
        <DatePicker label="Dato" {...args} ref={ref} />
        <Button onClick={() => ref.current?.focus()}>Fokuser DatePicker</Button>
      </VStack>
    );
  },
};

export const InsideModal: Story = {
  args: { label: 'Dato' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
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
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const norwegianDateFormatter = new DateFormatter('no-NO', {
      dateStyle: 'full',
      timeStyle: 'short',
    });
    const [date, setDate] = useState<CalendarDate>(today('Europe/Oslo'));
    const [time, setTime] = useState<Time>(new Time(12, 0, 0));
    const dateTime = toCalendarDateTime(date, time);
    return (
      <VStack gap="x1">
        <HStack gap="x1">
          <DatePicker
            {...args}
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
      </VStack>
    );
  },
};

export const NativeDate: Story = {
  args: { label: 'Dato' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const [date, setDate] = useState<Date>(new Date());
    return (
      <DatePicker
        {...args}
        value={nativeDateToCalendarDate(date)}
        onChange={d => setDate(calendarDateToNativeDate(d))}
      />
    );
  },
};
