import { Paragraph, ParagraphProps } from '.';
import { StoryTemplate } from '../../../storybook';

type StoryTProps = {
  text: string;
} & ParagraphProps;

export default {
  title: 'Design system/Typography/Paragraph',
  component: Paragraph,
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
    <StoryTemplate title="Paragraph - default">
      <Paragraph {...rest}>{text || 'Paragraph'}</Paragraph>
    </StoryTemplate>
  );
};
