import { Typography as DDSTypography, TypographyProps } from './Typography';
import { StoryTemplate } from '../../storybook/StoryTemplate';

type StoryTProps = {
  text: string;
} & TypographyProps;

export default {
  title: 'Design system/Typography',
  component: DDSTypography,
  argTypes: {
    typographyType: { control: { type: 'select' } },
    bold: { control: { type: 'boolean' } },
    italic: { control: { type: 'boolean' } },
    withMargins: { control: { type: 'boolean' } },
    externalLink: { control: { type: 'boolean' } },
    color: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
    text: { control: { type: 'text' } }
  },
  parameters: {
    controls: {
      exclude: ['style', 'target', 'as']
    }
  }
};

export const Default = (args: StoryTProps) => {
  const { text, ...rest } = args;
  return (
    <StoryTemplate title="Typography - default">
      <DDSTypography {...rest}>{text || 'default'}</DDSTypography>
    </StoryTemplate>
  );
};
