import { Caption, CaptionProps } from '.';
import { StoryTemplate } from '../../../storybook';

type StoryTProps = {
  text: string;
} & CaptionProps;

export default {
  title: 'Design system/Typography/Caption',
  component: Caption,
  argTypes: {
    withMargins: { control: { type: 'boolean' } },
    text: { control: { type: 'text' } },
  },
};

export const Default = (args: StoryTProps) => {
  const { text, ...rest } = args;
  return (
    <StoryTemplate title="Caption - default">
      <Caption {...rest}>{text || 'Caption'}</Caption>
    </StoryTemplate>
  );
};
