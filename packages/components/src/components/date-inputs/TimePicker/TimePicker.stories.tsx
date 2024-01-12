import { TimePicker, TimePickerProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import type { Meta } from '@storybook/react';
import { TimeValue } from '@react-types/datepicker';
import { Time } from '@internationalized/date';
import { useState } from 'react';
import { DatePicker } from '../DatePicker';
import { Button } from '../../Button';
import { TimeIcon } from '../../Icon/icons';
import { VStack, HStack } from '../../Stack';
import { TextInput } from '../../TextInput';
import { Label } from '../../Typography';

const meta: Meta<typeof TimePicker> = {
  title: 'dds-components/TimePicker',
  component: TimePicker,
};

export default meta;

export const Default = (args: Partial<TimePickerProps>) => {
  return (
    <StoryTemplate title="TimePicker - default">
      <TimePicker label="Tidspunkt" {...args} />
    </StoryTemplate>
  );
};

export const Required = (args: Partial<TimePickerProps>) => {
  return (
    <StoryTemplate title="TimePicker - required">
      <TimePicker label="Tidspunkt" {...args} isRequired />
    </StoryTemplate>
  );
};

export const Controlled = (args: Partial<TimePickerProps>) => {
  const [value, setValue] = useState<Time | null>(new Time(12));

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

export const Error = (args: Partial<TimePickerProps>) => {
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

export const OverviewSizes = (args: Partial<TimePickerProps>) => {
  return (
    <StoryTemplate title="TimePicker - overview sizes">
      <TimePicker {...args} componentSize="medium" label="Medium" />
      <TimePicker {...args} componentSize="small" label="Small" />
      <TimePicker {...args} componentSize="tiny" label="Tiny" />
    </StoryTemplate>
  );
};

export const OverviewSizesComparedWithTextInputWithIcon = (
  args: Partial<TimePickerProps>,
) => {
  const componentSizes = ['medium', 'small', 'tiny'] as const;
  return (
    <StoryTemplate title="TimePicker - overview sizes">
      {componentSizes.map(componentSize => (
        <VStack
          key={componentSize}
          align="flex-start"
          justify="flex-start"
          gap="x0.25"
        >
          <Label style={{ textTransform: 'capitalize' }}>{componentSize}</Label>
          <HStack gap="x0.25">
            <TimePicker
              label="Tidspunkt"
              {...args}
              componentSize={componentSize}
            />
            <TextInput
              label="Tidspunkt"
              componentSize={componentSize}
              icon={TimeIcon}
            />
          </HStack>
          <TextInput
            label="Tidspunkt"
            componentSize={componentSize}
            icon={TimeIcon}
          />
        </VStack>
      ))}
    </StoryTemplate>
  );
};

export const OverviewSizesWithDatePicker = (args: Partial<TimePickerProps>) => {
  const componentSizes = ['medium', 'small', 'tiny'] as const;
  return (
    <StoryTemplate title="TimePicker - overview sizes with datepicker">
      {componentSizes.map(componentSize => (
        <VStack
          key={componentSize}
          align="flex-start"
          justify="flex-start"
          gap="x0.25"
        >
          <HStack gap="x0.25">
            <TimePicker
              {...args}
              componentSize={componentSize}
              label="Tidspunkt"
            />
            <DatePicker componentSize={componentSize} label="Tidspunkt" />
          </HStack>
          <DatePicker componentSize={componentSize} label="Tidspunkt" />
        </VStack>
      ))}
    </StoryTemplate>
  );
};
