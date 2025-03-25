import { type Meta, type StoryObj } from '@storybook/react';

import { HStack } from './HStack';
import { responsiveStackPropsArgTypes } from '../../../storybook/helpers';
import { Box } from '../../layout';

export default {
  title: 'dds-components/Layout Primitives/HStack',
  component: HStack,
  argTypes: {
    as: { control: 'text' },
    ...responsiveStackPropsArgTypes,
  },
} satisfies Meta<typeof HStack>;

const ExampleElement = () => (
  <Box
    width="5rem"
    height="5rem"
    style={{
      border: '2px dashed black',
    }}
  />
);

type Story = StoryObj<typeof HStack>;

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
