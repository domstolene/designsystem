import preview from '#.storybook/preview';

import {
  commonArgTypesWithStringChildren,
  ddsProviderDecorator,
} from '../../storybook';

import { ChipButton, ChipGroup, ChipRemovable } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Chip',
  component: ChipGroup,
  argTypes: {
    ...commonArgTypesWithStringChildren,
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const ChipGroupPreview = meta.story({
  name: 'ChipGroup',
  args: { label: 'Filtre' },
  render: args => (
    <ChipGroup {...args}>
      <ChipRemovable>Hunder</ChipRemovable>
      <ChipRemovable>Katter</ChipRemovable>
      <ChipButton>Tøm filtre</ChipButton>
    </ChipGroup>
  ),
});
