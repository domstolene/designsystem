import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { Chip, ChipGroup } from '.';

export default {
  title: 'dds-components/Chip/ChipGroup',
  component: ChipGroup,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof ChipGroup>;

export const Default: Story = {
  decorators: Story => (
    <StoryTemplate title="ChipGroup - default">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <ChipGroup {...args}>
      <Chip text="Chip 1" />
      <Chip text="Chip 2" />
    </ChipGroup>
  ),
};
