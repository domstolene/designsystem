import { type Meta, type StoryObj } from '@storybook/react';

import { HStack, VStack } from './Stack';
import { htmlPropsArgType } from '../../storybook/helpers';

export default {
  title: 'dds-components/Stack',
  component: HStack,
  argTypes: {
    htmlProps: htmlPropsArgType,
    align: { control: 'text' },
    justify: { control: 'text' },
  },
} satisfies Meta<typeof HStack>;

const ExampleElement = () => (
  <div
    style={{
      width: '100px',
      height: '100px',
      border: '2px dashed black',
    }}
  />
);

type Story = StoryObj<typeof HStack>;

const children = (
  <>
    <ExampleElement />
    <ExampleElement />
    <ExampleElement />
    <ExampleElement />
  </>
);

export const VStackDefault: Story = {
  name: 'VStack',
  args: { children },
  render: args => <VStack {...args} />,
};

export const HStackDefault: Story = {
  name: 'HStack',
  args: { children },
};
