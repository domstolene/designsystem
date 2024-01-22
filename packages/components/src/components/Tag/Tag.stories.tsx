import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { HStack, VStack } from '../Stack';

import { Tag, type TagProps } from '.';

export default {
  title: 'dds-components/Tag',
  component: Tag,
  argTypes: {
    text: { control: 'text' },
    withIcon: { control: 'boolean' },
  },
};

export const Default = (args: Omit<TagProps, 'text'>) => (
  <StoryTemplate title="Tag - default" display="block">
    <Tag {...args}>default</Tag>
  </StoryTemplate>
);

export const Overview = (args: Omit<TagProps, 'text'>) => (
  <StoryTemplate title="Tag - overview">
    <HStack gap="x4">
      <VStack align="flex-start" gap="x1">
        <Tag {...args}>default</Tag>
        <Tag {...args} purpose="success">
          success
        </Tag>
        <Tag {...args} purpose="danger">
          danger
        </Tag>
        <Tag {...args} purpose="warning">
          warning
        </Tag>
        <Tag {...args} purpose="info">
          info
        </Tag>
      </VStack>
      <VStack align="flex-start" gap="x1">
        <Tag {...args} withIcon>
          default
        </Tag>
        <Tag {...args} withIcon purpose="success">
          success
        </Tag>
        <Tag {...args} withIcon purpose="danger">
          danger
        </Tag>
        <Tag {...args} withIcon purpose="warning">
          warning
        </Tag>
        <Tag {...args} withIcon purpose="info">
          info
        </Tag>
      </VStack>
    </HStack>
  </StoryTemplate>
);

export const WithIcon = (args: TagProps) => (
  <StoryTemplate title="Tag - with icon">
    <Tag {...args} withIcon>
      default
    </Tag>
    <Tag {...args} withIcon purpose="success">
      success
    </Tag>
    <Tag {...args} withIcon purpose="danger">
      danger
    </Tag>
    <Tag {...args} withIcon purpose="warning">
      warning
    </Tag>
    <Tag {...args} withIcon purpose="info">
      info
    </Tag>
  </StoryTemplate>
);
