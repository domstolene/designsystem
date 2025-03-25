import { type Meta, type StoryObj } from '@storybook/react';

import {
  commonBasePropsArgTypes,
  windowWidthDecorator,
} from '../../../storybook/helpers';

import { Show } from '.';

const meta: Meta<typeof Show> = {
  title: 'dds-components/Layout Primitives/Show',
  component: Show,
  argTypes: {
    as: { control: 'text' },
    breakpointBelow: { control: 'select' },
    breakpointAbove: { control: 'select' },
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

type Story = StoryObj<typeof Show>;

export const Default: Story = {
  args: {
    children: 'Denne vises kun ved sm brekkpunkt og oppover',
    breakpointAbove: 'sm',
  },
};

export const BreakpointBelow: Story = {
  args: {
    children: 'Denne vises kun ved sm brekkpunkt og nedover',
    breakpointBelow: 'sm',
  },
};
