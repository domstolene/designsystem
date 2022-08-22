import { StoryTemplate } from '../../storybook';
import { ToggleButton, ToggleButtonProps } from '.';
import { NotificationsIcon } from '../../icons/tsx';

export default {
  title: 'Design system/ToggleButton/ToggleButton',
  component: ToggleButton,
  argTypes: {
    label: { control: 'text' },
  },
};

export const Default = (args: ToggleButtonProps) => (
  <StoryTemplate title="ToggleButton - default">
    <ToggleButton {...args} label={args.label || 'Tekst'} />
  </StoryTemplate>
);

export const WithIcon = (args: ToggleButtonProps) => (
  <StoryTemplate title="ToggleButton - default">
    <ToggleButton
      {...args}
      label={args.label || 'Tekst'}
      icon={NotificationsIcon}
    />
  </StoryTemplate>
);
