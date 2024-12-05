import { type Meta, type StoryObj } from '@storybook/react';

import { NotificationsIcon } from '../Icon/icons';

import { ToggleButton } from '.';

export default {
  title: 'dds-components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    label: { control: 'text' },
    htmlProps: { control: false },
    icon: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof ToggleButton>;

type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  args: { label: 'Tekst' },
};

export const WithIcon: Story = {
  args: { label: 'Tekst', icon: NotificationsIcon },
};
