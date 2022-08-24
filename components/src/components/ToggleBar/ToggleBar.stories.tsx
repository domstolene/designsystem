import { SB_DESIGNSYSTEM_PREFIX, StoryTemplate } from '../../storybook';
import { ToggleBar, ToggleBarProps } from './ToggleBar';

export default {
  title: `${SB_DESIGNSYSTEM_PREFIX}/ToggleBar`,
  component: ToggleBar,
};

export const Default = (args: ToggleBarProps) => (
  <StoryTemplate title="ToggleBar - default">
    <ToggleBar {...args}></ToggleBar>
  </StoryTemplate>
);
