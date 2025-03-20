import { type Meta, type StoryObj } from '@storybook/react';

import {
  htmlPropsArgType,
  responsivePropsArgTypes,
} from '../../../storybook/helpers';

import { Paper } from '.';

const meta: Meta<typeof Paper> = {
  title: 'dds-components/Layout Primitives/Paper',
  component: Paper,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    breakpointBelow: { control: 'select' },
    breakpointAbove: { control: 'select' },
    ...responsivePropsArgTypes,
    className: htmlPropsArgType,
    style: htmlPropsArgType,
  },
};
export default meta;

type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  args: {
    border: 'default',
    padding: 'x1.5',
    children:
      'Dette en en Paper - layout-komponent med støtte for styling for en flate',
  },
};
