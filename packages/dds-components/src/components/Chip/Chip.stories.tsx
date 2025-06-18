import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { htmlPropsArgType } from '../../storybook/helpers';

import { Chip } from '.';

export default {
  title: 'dds-components/Components/Chip',
  component: Chip,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: {
    htmlProps: htmlPropsArgType,
  },
  args: { onClose: fn() },
} satisfies Meta<typeof Chip>;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: { text: 'Chip' },
};
