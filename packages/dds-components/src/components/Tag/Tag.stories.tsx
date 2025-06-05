import { type Meta, type StoryObj } from '@storybook/react-vite';

import { htmlPropsArgType } from '../../storybook/helpers';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { Tag } from '.';

export default {
  title: 'dds-components/Components/Tag',
  component: Tag,
  argTypes: {
    children: { control: 'text' },
    htmlProps: htmlPropsArgType,
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
