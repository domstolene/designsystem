import { Typography as DDSTypography, Typography } from '.';
import { textColors } from './Typography.tokens';
import { StoryTemplate } from '../../storybook/StoryTemplate';

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
  return (
    <StoryTemplate title="Link - overview">
      <Typography typographyType="a" href="https://www.domstol.no">
        Link
      </Typography>
      <Typography typographyType="a" href="https://www.domstol.no" externalLink>
        Link
      </Typography>
    </StoryTemplate>
  );
};
