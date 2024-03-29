import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { OpenExternalIcon as OpenExternal } from './icons/openExternal';

import { Icon } from '.';

export default {
  title: 'dds-components/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'text' },
    htmlProps: { control: false },
    icon: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;

const icon = OpenExternal;

export const Default: Story = {
  args: {
    icon,
  },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: {
    icon,
  },
  decorators: Story => (
    <StoryTemplate display="grid" $columnsAmount={4}>
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
    icon,
    iconSize: 'inherit',
  },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <p
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '20px',
      }}
    >
      <Icon {...args} />
      Tekst
    </p>
  ),
};
