import { type StoryObj } from '@storybook/react-vite';

import { ddsProviderDecorator } from '../../storybook';

import { Chip, ChipGroup } from '.';

export default {
  title: 'dds-components/Components/Chip/ChipGroup',
  component: ChipGroup,
  decorators: [ddsProviderDecorator],
};

type Story = StoryObj<typeof ChipGroup>;

export const Preview: Story = {
  render: args => (
    <ChipGroup {...args}>
      <Chip text="Chip 1" />
      <Chip text="Chip 2" />
    </ChipGroup>
  ),
};
