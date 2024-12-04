import { type Meta, type StoryObj } from '@storybook/react';

import { StoryHStack, StoryVStack } from '../Stack/utils';

import { Tag } from '.';

export default {
  title: 'dds-components/Tag',
  component: Tag,
  argTypes: {
    text: { control: 'text' },
    withIcon: { control: 'boolean' },
    children: { control: 'text' },
    htmlProps: { control: false },
  },
} satisfies Meta<typeof Tag>;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { children: 'default' },
};

export const Overview: Story = {
  args: { children: 'default' },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <Tag {...args} purpose="success">
          success
        </Tag>
        <Tag {...args} purpose="info">
          info
        </Tag>
        <Tag {...args} purpose="danger">
          danger
        </Tag>
        <Tag {...args} purpose="warning">
          warning
        </Tag>
        <Tag {...args}>default</Tag>
      </StoryVStack>

      <StoryVStack>
        <Tag {...args} withIcon purpose="success">
          success
        </Tag>
        <Tag {...args} withIcon purpose="info">
          info
        </Tag>
        <Tag {...args} withIcon purpose="danger">
          danger
        </Tag>
        <Tag {...args} withIcon purpose="warning">
          warning
        </Tag>
      </StoryVStack>

      <StoryVStack>
        <Tag {...args} appearance="strong" purpose="success">
          success
        </Tag>
        <Tag {...args} appearance="strong" purpose="info">
          info
        </Tag>
        <Tag {...args} appearance="strong" purpose="danger">
          danger
        </Tag>
        <Tag {...args} appearance="strong" purpose="warning">
          warning
        </Tag>
        <Tag {...args} appearance="strong">
          default
        </Tag>
      </StoryVStack>
      <StoryVStack>
        <Tag {...args} appearance="strong" withIcon purpose="success">
          success
        </Tag>
        <Tag {...args} appearance="strong" withIcon purpose="info">
          info
        </Tag>
        <Tag {...args} appearance="strong" withIcon purpose="danger">
          danger
        </Tag>
        <Tag {...args} appearance="strong" withIcon purpose="warning">
          warning
        </Tag>
      </StoryVStack>
    </StoryHStack>
  ),
};
