import { type Meta, type StoryObj } from '@storybook/react';

import { Chip } from '.';

export default {
  title: 'dds-components/Chip',
  component: Chip,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: {
    text: { control: { type: 'text' } },
    htmlProps: { control: false },
  },
} satisfies Meta<typeof Chip>;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: { text: 'Chip' },
};
