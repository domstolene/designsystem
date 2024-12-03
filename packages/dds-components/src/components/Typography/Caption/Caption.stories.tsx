import { type Meta, type StoryObj } from '@storybook/react';

import { Caption } from '.';

export default {
  title: 'dds-components/Typography/Caption',
  component: Caption,
  argTypes: {
    withMargins: { control: { type: 'boolean' } },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof Caption>;

type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  args: { children: 'Caption' },
};
