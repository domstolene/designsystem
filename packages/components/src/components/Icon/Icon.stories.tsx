import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { OpenExternalIcon as OpenExternal } from './icons/openExternal';

import { Icon } from '.';

export default {
  title: 'dds-components/Icon',
  component: Icon,
  argTypes: {
    color: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: OpenExternal,
  },
  decorators: Story => (
    <StoryTemplate title="Icon - default">
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: {
    icon: OpenExternal,
  },
  decorators: Story => (
    <StoryTemplate title="Icon - overview" display="grid" $columnsAmount={4}>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Icon {...args} iconSize="inherit" />
      <Icon {...args} iconSize="small" />
      <Icon {...args} iconSize="medium" />
      <Icon {...args} iconSize="large" />
    </>
  ),
};

export const Inherit: Story = {
  args: {
    icon: OpenExternal,
    iconSize: 'inherit',
  },
  decorators: Story => (
    <StoryTemplate title="Icon - inherit">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <p style={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}>
      <Icon {...args} />
      Tekst
    </p>
  ),
};
