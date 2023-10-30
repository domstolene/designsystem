import {
  CalendarIcon,
  HStack,
  TextInput,
} from '@norges-domstoler/dds-components';
import { Datepicker, DatepickerProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

export default {
  title: 'ALPHA/dds-datepicker/Datepicker',
  component: Datepicker,
  argTypes: {
    label: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
  },
};

export const Default = (args: DatepickerProps) => {
  return (
    <StoryTemplate title="Datepicker - default">
      <HStack>
        <Datepicker {...args} />
        <TextInput icon={CalendarIcon} />
        <TextInput />
      </HStack>
      <TextInput icon={CalendarIcon} />
      <TextInput />
    </StoryTemplate>
  );
};
