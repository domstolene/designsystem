import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { commonArgTypes } from '../../storybook/helpers';

import { Chip } from '.';

export default {
  title: 'dds-components/Components/Chip',
  component: Chip,
  argTypes: {
    ...commonArgTypes,
  },
  args: { onClose: fn() },
} satisfies Meta<typeof Chip>;

type Story = StoryObj<typeof Chip>;

export const Preview: Story = {
  args: { text: 'Chip' },
};
