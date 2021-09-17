import { Typography as DDSTypography, Typography } from './Typography';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';

export default {
  title: 'Design system/Typography/Overview/Link',
  component: DDSTypography,
  argTypes: {
    externalLink: { control: { type: 'boolean' } },
    href: { control: { type: 'text' } },
    color: { control: { type: 'text' } }
  }
};

export const Link = () => {
  return storyHTMLGridTemplate(
    'Link - overview',
    <>
      <Typography typographyType="a" href="https://www.domstol.no">
        Link
      </Typography>
      <Typography typographyType="a" href="https://www.domstol.no" externalLink>
        Link
      </Typography>
    </>,
    '20px',
    1
  );
};
