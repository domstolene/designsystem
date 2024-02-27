import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { Link } from '.';

export default {
  title: 'dds-components/Typography/Link',
  component: Link,
  argTypes: {
    external: { control: { type: 'boolean' } },
    typographyType: { control: { type: 'select' } },
    withMargins: { control: { type: 'boolean' } },
    href: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
};

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: { children: 'Link', href: 'https://www.domstol.no' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: { children: 'Link', href: 'https://www.domstol.no' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Link {...args} />
      <Link {...args} external />
    </>
  ),
};
