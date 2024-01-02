import { TimePicker, TimePickerProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { useRef, useState } from 'react';
import {
  Button,
  CalendarIcon,
  Datepicker,
  HStack,
  Label,
  Modal,
  TextInput,
  VStack,
} from '@norges-domstoler/dds-components';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof TimePicker> = {
  title: 'ALPHA/dds-datepicker/TimePicker',
  component: TimePicker,
};

export default meta;

export const Default = (args: Partial<TimePickerProps>) => {
  return (
    <StoryTemplate title="TimePicker - default">
      <TimePicker label="Dato" {...args} />
    </StoryTemplate>
  );
};
