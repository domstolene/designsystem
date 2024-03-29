import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { HStack, VStack } from '../Stack';

import { Tag } from '.';

export default {
  title: 'dds-components/Tag',
  component: Tag,
  argTypes: {
    text: { control: 'text' },
    withIcon: { control: 'boolean' },
    strong: { control: 'boolean' },
    children: { control: 'text' },
    htmlProps: { control: false },
  },
} satisfies Meta<typeof Tag>;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { children: 'default' },
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: { children: 'default' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <HStack align="flex-start" gap="x2">
        <VStack align="flex-start" gap="x1">
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
        </VStack>

        <VStack align="flex-start" gap="x1">
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
        </VStack>

        <VStack align="flex-start" gap="x1">
          <Tag {...args} strong purpose="success">
            success
          </Tag>
          <Tag {...args} strong purpose="info">
            info
          </Tag>
          <Tag {...args} strong purpose="danger">
            danger
          </Tag>
          <Tag {...args} strong purpose="warning">
            warning
          </Tag>
          <Tag {...args} strong>
            default
          </Tag>
        </VStack>
        <VStack align="flex-start" gap="x1">
          <Tag {...args} strong withIcon purpose="success">
            success
          </Tag>
          <Tag {...args} strong withIcon purpose="info">
            info
          </Tag>
          <Tag {...args} strong withIcon purpose="danger">
            danger
          </Tag>
          <Tag {...args} strong withIcon purpose="warning">
            warning
          </Tag>
        </VStack>
      </HStack>
    </>
  ),
};
