import { TimePicker, TimePickerProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import type { Meta } from '@storybook/react';
import { TimeValue } from '@react-types/datepicker';
import { Time } from '@internationalized/date';
import { Button } from '@norges-domstoler/dds-components';
import { useState } from 'react';

const meta: Meta<typeof TimePicker> = {
  title: 'ALPHA/dds-datepicker/TimePicker',
  component: TimePicker,
};

export default meta;

export const Default = (args: Partial<TimePickerProps<TimeValue>>) => {
  return (
    <StoryTemplate title="TimePicker - default">
      <TimePicker label="Tidspunkt" {...args} />
    </StoryTemplate>
  );
};

export const Required = (args: Partial<TimePickerProps<TimeValue>>) => {
  return (
    <StoryTemplate title="DatePicker - default">
      <TimePicker label="Tidspunkt" {...args} isRequired />
    </StoryTemplate>
  );
};

export const Controlled = (args: Partial<TimePickerProps<TimeValue>>) => {
  const [value, setValue] = useState<TimeValue | null>(new Time(12));

  return (
    <StoryTemplate title="TimePicker - controlled">
      <TimePicker
        label="Tidspunkt"
        {...args}
        value={value}
        onChange={setValue}
      />
      <Button onClick={() => setValue(new Time(12))}>
        Sett til klokken 12
      </Button>
    </StoryTemplate>
  );
};

export const Error = (args: Partial<TimePickerProps<TimeValue>>) => {
  return (
    <StoryTemplate title="TimePicker - error">
      <TimePicker
        label="Tidspunkt"
        {...args}
        errorMessage="Her er noe veldig galt! 😨"
      />
    </StoryTemplate>
  );
};

export const OverviewSizes = (args: Partial<TimePickerProps<TimeValue>>) => {
  return (
    <StoryTemplate title="TimePicker - overview sizes">
      <TimePicker {...args} componentSize="medium" label="Medium" />
      <TimePicker {...args} componentSize="small" label="Small" />
      <TimePicker {...args} componentSize="tiny" label="Tiny" />
    </StoryTemplate>
  );
};
