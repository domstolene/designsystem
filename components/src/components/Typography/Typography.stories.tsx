import { Typography as DDSTypography, TypographyProps } from './Typography';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';

type StoryTProps = {
  text: string;
} & TypographyProps;

export default {
  title: 'Design system/Typography/Default',
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
  return storyHTMLGridTemplate(
    'Typography - default',
    <DDSTypography {...rest}>{text || 'default'}</DDSTypography>
  );
};
