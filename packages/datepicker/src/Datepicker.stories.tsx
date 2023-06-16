import { Datepicker } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

export default {
  title: 'dds-datepicker/Datepicker',
  component: Datepicker,
};

export const Default = () => {
  return (
    <StoryTemplate title="Datepicker - default">
      <Datepicker />
    </StoryTemplate>
  );
};
