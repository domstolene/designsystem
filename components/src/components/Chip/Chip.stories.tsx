import { Chip, ChipProps } from '.';
import { StoryTemplate } from '../../storybook';

export default {
  title: 'Design system/Chip/Chip',
  component: Chip
};

export const Default = (args: ChipProps) => (
  <StoryTemplate title="Chip - default">
    <Chip {...args} text={args.text || 'Chip'} />
  </StoryTemplate>
);
