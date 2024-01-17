import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { NotificationsIcon } from '../Icon/icons';

import { ToggleButton, type ToggleButtonProps } from '.';

export default {
  title: 'dds-components/ToggleButton/ToggleButton',
  component: ToggleButton,
  argTypes: {
    label: { control: 'text' },
  },
};

export const Default = (args: ToggleButtonProps) => (
  <StoryTemplate title="ToggleButton - default">
    <ToggleButton {...args} label={args.label ?? 'Tekst'} />
  </StoryTemplate>
);

export const WithIcon = (args: ToggleButtonProps) => (
  <StoryTemplate title="ToggleButton - default">
    <ToggleButton
      {...args}
      label={args.label ?? 'Tekst'}
      icon={NotificationsIcon}
    />
  </StoryTemplate>
);
