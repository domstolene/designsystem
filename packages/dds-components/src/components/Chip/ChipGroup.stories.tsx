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
      <Chip>Chip 1</Chip>
      <Chip>Chip 2</Chip>
    </ChipGroup>
  ),
};
