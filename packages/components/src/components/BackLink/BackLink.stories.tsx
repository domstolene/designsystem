import { type StoryObj } from '@storybook/react';

import { BackLink } from '.';

export default {
  title: 'dds-components/BackLink',
  component: BackLink,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: {
    label: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
  },
};

type Story = StoryObj<typeof BackLink>;

export const Default: Story = {
  args: { label: 'Forrige nivå', href: '#' },
};
