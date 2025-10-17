import { type Meta, type StoryObj } from '@storybook/react-vite';

import { HStack } from './HStack';
import { Box } from '../..';
import {
  responsiveStackPropsArgTypes,
  windowWidthDecorator,
} from '../../../../storybook';

export default {
  title: 'dds-components/Layout Primitives/HStack',
  component: HStack,
  argTypes: {
    ...responsiveStackPropsArgTypes,
  },
} satisfies Meta<typeof HStack>;

const ExampleElement = () => (
  <Box
    width="5rem"
    height="5rem"
    style={{
      border: '1px dashed black',
    }}
  />
);

type Story = StoryObj<typeof HStack>;

export const Preview: Story = {
  args: {
    children: [
      <ExampleElement />,
      <ExampleElement />,
      <ExampleElement />,
      <ExampleElement />,
    ],
  },
};

export const StylingPerBreakpoint: Story = {
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    style: {
      border: '1px dashed var(--dds-color-border-default)',
    },
    padding: {
      xs: 'x0.125',
      sm: 'x0.25',
      md: 'x0.5',
      lg: 'x1',
      xl: 'x2',
    },
    gap: {
      xs: 'x0.125',
      sm: 'x0.25',
      md: 'x0.5',
      lg: 'x1',
      xl: 'x2',
    },
    children: [
      <ExampleElement />,
      <ExampleElement />,
      <ExampleElement />,
      <ExampleElement />,
    ],
  },
};
