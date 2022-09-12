import { Caption, CaptionProps } from '.';
import { StoryTemplate } from '../../../storybook';

type StoryTProps = {
  text: string;
} & CaptionProps;

export default {
  title: 'Design system/Typography/Caption',
  component: Caption,
  argTypes: {
    typographyType: { control: { type: 'select' } },
    bold: { control: { type: 'boolean' } },
    italic: { control: { type: 'boolean' } },
    underline: { control: { type: 'boolean' } },
    withMargins: { control: { type: 'boolean' } },
    color: { control: { type: 'text' } },
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
