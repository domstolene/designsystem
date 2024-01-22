import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { HStack, VStack } from '../Stack';
import { Heading } from '../Typography';

import { Tag, type TagProps } from '.';

export default {
  title: 'dds-components/Tag',
  component: Tag,
  argTypes: {
    text: { control: 'text' },
    withIcon: { control: 'boolean' },
  },
};

export const Default = (args: TagProps) => (
  <StoryTemplate title="Tag - default" display="block">
    <Tag text="default" {...args} />
  </StoryTemplate>
);

export const Overview = (args: TagProps) => (
  <StoryTemplate title="Tag - overview">
    <HStack gap="x4">
      <VStack align="flex-start" gap="x1">
        <Tag {...args} text="default" />
        <Tag {...args} text="success" purpose="success" />
        <Tag {...args} text="danger" purpose="danger" />
        <Tag {...args} text="warning" purpose="warning" />
        <Tag {...args} text="info" purpose="info" />
      </VStack>
      <VStack align="flex-start" gap="x1">
        <Tag {...args} withIcon text="default" />
        <Tag {...args} withIcon text="success" purpose="success" />
        <Tag {...args} withIcon text="danger" purpose="danger" />
        <Tag {...args} withIcon text="warning" purpose="warning" />
        <Tag {...args} withIcon text="info" purpose="info" />
      </VStack>
    </HStack>
  </StoryTemplate>
);

export const WithIcon = (args: TagProps) => (
  <StoryTemplate title="Tag - with icon">
    <Tag {...args} withIcon text="default" />
    <Tag {...args} withIcon text="success" purpose="success" />
    <Tag {...args} withIcon text="danger" purpose="danger" />
    <Tag {...args} withIcon text="warning" purpose="warning" />
    <Tag {...args} withIcon text="info" purpose="info" />
  </StoryTemplate>
);
