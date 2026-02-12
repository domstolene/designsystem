import {
  CalendarDate,
  DateFormatter,
  Time,
  isWeekend,
  toCalendarDateTime,
} from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import {
  ddsProviderDecorator,
  htmlArgType,
  htmlEventArgType,
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../../storybook';
import { Button } from '../../Button';
import { INPUT_SIZES } from '../../helpers/Input';
import { StoryHStack, StoryVStack } from '../../layout/Stack/utils';
import { Modal } from '../../Modal';
import { Paragraph } from '../../Typography';
import { TimePicker } from '../TimePicker';
import {
  calendarDateToNativeDate,
  nativeDateToCalendarDate,
} from '../utils/transform';

import { DatePicker } from '.';

const meta: Meta<typeof DatePicker> = {
  title: 'dds-components/Components/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      story: { height: '500px' },
    },
  },
  argTypes: {
    width: responsivePropsArgTypes.width,
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    onBlur: htmlEventArgType,
    onChange: htmlEventArgType,
    onFocus: htmlEventArgType,
    onOpenChange: { control: false },
    onFocusChange: { control: false },
    id: htmlArgType,
  },
  args: {
    onBlur: fn(),
    onChange: fn(),
    onFocus: fn(),
    onFocusChange: fn(),
    onOpenChange: fn(),
  },
  decorators: [ddsProviderDecorator],
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Preview: Story = {
  args: { label: 'Dato' },
};

export const States: Story = {
  args: {
    value: new CalendarDate(2023, 12, 24),
  },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <DatePicker {...args} label="Disabled" isDisabled />
        <DatePicker {...args} label="Readonly" isReadOnly />
        <DatePicker {...args} label="Required" isRequired />
        <DatePicker
          {...args}
          label="Weekends unavailable"
          isDateUnavailable={date => isWeekend(date, 'no-NO')}
        />
      </StoryVStack>
      <StoryVStack>
        <DatePicker {...args} label="Clearable" clearable />
        <DatePicker
          {...args}
          label="ErrorMessage"
          errorMessage="Dette er en feilmelding ved valideringsfeil"
        />
        <DatePicker {...args} label="Tip" tip="Dette er en hjelpetekst" />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const Sizes: Story = {
  render: args => (
    <StoryVStack>
      {INPUT_SIZES.map(size => (
        <DatePicker
          {...args}
          key={size}
          componentSize={size}
          label={labelText(size)}
        />
      ))}
    </StoryVStack>
  ),
};

export const SmallScreen: Story = {
  args: { label: 'Dato', smallScreenBreakpoint: 'xl' },
};

export const Responsive: Story = {
  args: { label: 'Dato', smallScreenBreakpoint: 'sm' },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Åpne kalender; versjonen for liten skjerm vises ved sm brekkpunkt og nedover.',
      ),
  ],
};

export const InsideModal: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
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
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: { label: 'Dato' },
  render: args => {
    const norwegianDateFormatter = new DateFormatter('no-NO', {
      dateStyle: 'full',
      timeStyle: 'short',
    });
    const [date, setDate] = useState<CalendarDate>(
      new CalendarDate(2025, 6, 18),
    );
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
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: { label: 'Dato' },
  render: args => {
    const [date, setDate] = useState<Date>(new Date('June 18, 2025'));
    return (
      <DatePicker
        {...args}
        value={nativeDateToCalendarDate(date)}
        onChange={d => d !== null && setDate(calendarDateToNativeDate(d))}
      />
    );
  },
};
