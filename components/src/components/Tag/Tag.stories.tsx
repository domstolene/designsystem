import { Tag, TagProps } from '.';
import { StoryTemplate } from '../../storybook';

export default {
  title: 'design system/Tag',
  component: Tag,
  argTypes: {
    text: { control: 'text' },
  },
};

export const Overview = () => (
  <StoryTemplate title="Tag - overview">
    <Tag text="default" />
    <Tag text="success" purpose="success" />
    <Tag text="danger" purpose="danger" />
    <Tag text="warning" purpose="warning" />
    <Tag text="info" purpose="info" />
  </StoryTemplate>
);

export const Default = (args: TagProps) => (
  <StoryTemplate title="Tag - default" display="block">
    <Tag text="default" {...args} />
  </StoryTemplate>
);
