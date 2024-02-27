import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { HStack, type StackProps, VStack } from './Stack';

export default {
  title: 'dds-components/Stack',
  component: VStack,
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

export const VStackOverview = (args: StackProps) => (
  <StoryTemplate>
    <VStack {...args}>
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
    </VStack>
  </StoryTemplate>
);

export const HStackOverview = (args: StackProps) => (
  <StoryTemplate>
    <HStack {...args}>
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
    </HStack>
  </StoryTemplate>
);
