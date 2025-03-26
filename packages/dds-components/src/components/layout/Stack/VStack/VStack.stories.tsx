import { type Meta, type StoryObj } from '@storybook/react';

import { VStack } from './VStack';
import { Box } from '../..';
import { responsiveStackPropsArgTypes } from '../../../../storybook/helpers';

export default {
  title: 'dds-components/Layout Primitives/VStack',
  component: VStack,
  argTypes: {
    as: { control: 'text' },
    ...responsiveStackPropsArgTypes,
  },
} satisfies Meta<typeof VStack>;

const ExampleElement = () => (
  <Box
    width="5rem"
    height="5rem"
    style={{
      border: '2px dashed black',
    }}
  />
);

type Story = StoryObj<typeof VStack>;

export const Default: Story = {
  args: {
    children: [
      <ExampleElement />,
      <ExampleElement />,
      <ExampleElement />,
      <ExampleElement />,
    ],
  },
};
