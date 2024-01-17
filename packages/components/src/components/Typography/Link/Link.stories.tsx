import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { Link, type LinkProps } from '.';

type StoryTProps = {
  text: string;
} & LinkProps;

export default {
  title: 'dds-components/Typography/Link',
  component: Link,
  argTypes: {
    external: { control: { type: 'boolean' } },
    typographyType: { control: { type: 'select' } },
    withMargins: { control: { type: 'boolean' } },
    text: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
  },
};

export const Overview = (args: StoryTProps) => {
  const { text, href, ...rest } = args;
  return (
    <StoryTemplate title="Link - default">
      <Link {...rest} href={href ?? 'https://www.domstol.no'}>
        {text ?? 'Link'}
      </Link>
      <Link {...rest} external href={href ?? 'https://www.domstol.no'}>
        {text ?? 'Link'}
      </Link>
    </StoryTemplate>
  );
};

export const Default = (args: StoryTProps) => {
  const { text, href, ...rest } = args;
  return (
    <StoryTemplate title="Link - default">
      <Link {...rest} href={href ?? 'https://www.domstol.no'}>
        {text ?? 'Link'}
      </Link>
    </StoryTemplate>
  );
};
