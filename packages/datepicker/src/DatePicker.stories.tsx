import {
  CalendarIcon,
  HStack,
  TextInput,
} from '@norges-domstoler/dds-components';
import { DatePicker, DatePickerProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

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

export const Default = (args: DatePickerProps) => {
  return (
    <StoryTemplate title="DatePicker - default">
      <HStack>
        <DatePicker {...args} />
        <TextInput icon={CalendarIcon} />
        <TextInput />
      </HStack>
      <TextInput icon={CalendarIcon} />
      <TextInput />
    </StoryTemplate>
  );
};
