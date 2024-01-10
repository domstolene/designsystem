import { TimeField, TimeFieldProps } from '.';
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

const meta: Meta<typeof TimeField> = {
  title: 'dds-components/TimeField',
  component: TimeField,
};

export default meta;

export const Default = (args: Partial<TimeFieldProps<TimeValue>>) => {
  return (
    <StoryTemplate title="TimeField - default">
      <TimeField label="Tidspunkt" {...args} />
    </StoryTemplate>
  );
};

export const Required = (args: Partial<TimeFieldProps<TimeValue>>) => {
  return (
    <StoryTemplate title="DatePicker - default">
      <TimeField label="Tidspunkt" {...args} isRequired />
    </StoryTemplate>
  );
};

export const Controlled = (args: Partial<TimeFieldProps<TimeValue>>) => {
  const [value, setValue] = useState<TimeValue | null>(new Time(12));

  return (
    <StoryTemplate title="TimeField - controlled">
      <TimeField
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

export const Error = (args: Partial<TimeFieldProps<TimeValue>>) => {
  return (
    <StoryTemplate title="TimeField - error">
      <TimeField
        label="Tidspunkt"
        {...args}
        errorMessage="Her er noe veldig galt! 😨"
      />
    </StoryTemplate>
  );
};

export const OverviewSizes = (args: Partial<TimeFieldProps<TimeValue>>) => {
  return (
    <StoryTemplate title="TimeField - overview sizes">
      <TimeField {...args} componentSize="medium" label="Medium" />
      <TimeField {...args} componentSize="small" label="Small" />
      <TimeField {...args} componentSize="tiny" label="Tiny" />
    </StoryTemplate>
  );
};

export const OverviewSizesComparedWithTextInputWithIcon = (
  args: Partial<TimeFieldProps>,
) => {
  const componentSizes = ['medium', 'small', 'tiny'] as const;
  return (
    <StoryTemplate title="TimeField - overview sizes">
      {componentSizes.map(componentSize => (
        <VStack
          key={componentSize}
          align="flex-start"
          justify="flex-start"
          gap="x0.25"
        >
          <Label style={{ textTransform: 'capitalize' }}>{componentSize}</Label>
          <HStack gap="x0.25">
            <TimeField
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

export const OverviewSizesWithDatePicker = (
  args: Partial<TimeFieldProps<TimeValue>>,
) => {
  const componentSizes = ['medium', 'small', 'tiny'] as const;
  return (
    <StoryTemplate title="TimeField - overview sizes with datepicker">
      {componentSizes.map(componentSize => (
        <VStack
          key={componentSize}
          align="flex-start"
          justify="flex-start"
          gap="x0.25"
        >
          <HStack gap="x0.25">
            <TimeField
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
