import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { HStack, VStack } from './Stack';

export default {
  title: 'dds-components/Stack',
  component: HStack,
  argTypes: {
    htmlProps: { control: false },
    align: { control: 'text' },
    justify: { control: 'text' },
  },
};

const ExampleElement = () => (
  <div
    style={{
      width: '100px',
      height: '100px',
      border: '2px dashed black',
    }}
  />
);

type Story = StoryObj<typeof VStack>;

export const VStackDefault: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <VStack {...args}>
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
    </VStack>
  ),
};

export const HStackDefault: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <HStack {...args}>
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
    </HStack>
  ),
};
