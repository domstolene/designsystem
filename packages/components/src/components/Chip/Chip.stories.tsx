import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { Chip } from '.';

export default {
  title: 'dds-components/Chip/Chip',
  component: Chip,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
  argTypes: {
    text: { control: { type: 'text' } },
  },
};

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: { text: 'Chip' },
  decorators: Story => (
    <StoryTemplate title="Chip - default">
      <Story />
    </StoryTemplate>
  ),
};
