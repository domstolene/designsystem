import { Datepicker, DatepickerProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

export default {
  title: 'dds-datepicker/Datepicker',
  component: Datepicker,
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export const Default = (args: DatepickerProps) => {
  return (
    <StoryTemplate title="Datepicker - default">
      <Datepicker {...args} />
    </StoryTemplate>
  );
};
