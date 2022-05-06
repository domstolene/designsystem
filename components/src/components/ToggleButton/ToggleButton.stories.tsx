import { StoryTemplate } from '../../storybook/StoryTemplate';
import { ToggleButton, ToggleButtonProps } from '.';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export default {
  title: 'Design system/ToggleButton/ToggleButton',
  component: ToggleButton
};

export const Default = (args: ToggleButtonProps) => (
  <StoryTemplate title="ToggleButton - default">
    <ToggleButton text="Tekst" {...args} />
  </StoryTemplate>
);

export const WithIcon = (args: ToggleButtonProps) => (
  <StoryTemplate title="ToggleButton - with icon">
    <ToggleButton text="Tekst" Icon={NotificationsNoneOutlinedIcon} {...args} />
  </StoryTemplate>
);
