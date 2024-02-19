import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

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
};

type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  args: { label: 'Tekst' },
  decorators: Story => (
    <StoryTemplate title="ToggleButton - default">
      <Story />
    </StoryTemplate>
  ),
};

export const WithIcon: Story = {
  args: { label: 'Tekst', icon: NotificationsIcon },
  decorators: Story => (
    <StoryTemplate title="ToggleButton - with icon">
      <Story />
    </StoryTemplate>
  ),
};
