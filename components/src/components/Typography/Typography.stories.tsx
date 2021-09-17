import { Typography as DDSTypography, TypographyProps } from './Typography';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';

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
    href: { control: { type: 'text' } }
  },
  parameters: {
    controls: {
      exclude: ['style', 'target', 'as']
    }
  }
};

export const Default = (args: TypographyProps) => {
  return storyHTMLGridTemplate(
    'Typography - default',
    <>
      <DDSTypography {...args}>Default</DDSTypography>
    </>,
    '30px',
    1
  );
};
