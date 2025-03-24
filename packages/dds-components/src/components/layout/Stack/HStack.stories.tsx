import { type Meta, type StoryObj } from '@storybook/react';

import { HStack } from './HStack';
import {
  htmlPropsArgType,
  responsiveStackPropsArgTypes,
} from '../../../storybook/helpers';
import { Box } from '../../layout';

export default {
  title: 'dds-components/Layout Primitives/HStack',
  component: HStack,
  argTypes: {
    htmlProps: htmlPropsArgType,
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
