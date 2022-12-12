import { ComponentMeta } from '@storybook/react';
import { StoryTemplate } from '../../storybook';
import { HStack, StackProps, VStack } from './Stack';

export default {
  title: 'Design system/Stack',
  component: VStack,
} as ComponentMeta<typeof VStack>;

const ExampleElement = () => (
  <div
    style={{
      width: '100px',
      height: '100px',
      border: '2px dashed black',
    }}
  />
);

export const VStackOverview = (args: StackProps) => (
  <StoryTemplate title="VStack - overview">
    <VStack {...args}>
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
    </VStack>
  </StoryTemplate>
);

export const HStackOverview = (args: StackProps) => (
  <StoryTemplate title="HStack - overview">
    <HStack {...args}>
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
    </HStack>
  </StoryTemplate>
);
