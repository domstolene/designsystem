import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { NotificationsIcon } from '../Icon/icons';

import { ToggleButton } from '.';

export default {
  title: 'dds-components/ToggleButton/ToggleButton',
  component: ToggleButton,
  argTypes: {
    label: { control: 'text' },
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
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const WithIcon: Story = {
  args: { label: 'Tekst', icon: NotificationsIcon },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};
