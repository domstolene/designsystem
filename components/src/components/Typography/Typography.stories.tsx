import { Typography, TypographyProps } from '.';
import { StoryTemplate } from '../../storybook';

type StoryTProps = {
  text: string;
} & TypographyProps;

export default {
  title: 'Design system/Typography',
  component: Typography,
  argTypes: {
    typographyType: { control: { type: 'select' } },
    bold: { control: { type: 'boolean' } },
    italic: { control: { type: 'boolean' } },
    withMargins: { control: { type: 'boolean' } },
    externalLink: { control: { type: 'boolean' } },
    color: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
    text: { control: { type: 'text' } },
    as: { control: { type: 'text' } }
  },
  parameters: {
    controls: {
      exclude: ['style', 'target']
    }
  }
};

export const Default = (args: StoryTProps) => {
  const { text, ...rest } = args;
  return (
    <StoryTemplate title="Typography - default">
      <Typography {...rest}>{text || 'default'}</Typography>
    </StoryTemplate>
  );
};
