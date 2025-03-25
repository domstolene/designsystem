import { type Meta, type StoryObj } from '@storybook/react';

import {
  commonBasePropsArgTypes,
  windowWidthDecorator,
} from '../../../storybook/helpers';

import { Hide } from '.';

const meta: Meta<typeof Hide> = {
  title: 'dds-components/Layout Primitives/Hide',
  component: Hide,
  argTypes: {
    breakpointBelow: { control: 'select' },
    breakpointAbove: { control: 'select' },
    as: { control: 'text' },
    ...commonBasePropsArgTypes,
  },
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  decorators: [Story => windowWidthDecorator(<Story />)],
};
export default meta;

type Story = StoryObj<typeof Hide>;

export const Default: Story = {
  args: {
    children: 'Denne skjules kun ved sm brekkpunkt og nedover',
    breakpointBelow: 'sm',
  },
};

export const BreakpointAbove: Story = {
  args: {
    children: 'Denne skjules kun ved sm brekkpunkt og oppover',
    breakpointAbove: 'sm',
  },
};
