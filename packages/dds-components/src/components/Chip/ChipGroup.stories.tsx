import preview from '#.storybook/preview';

import { ddsProviderDecorator } from '../../storybook';

import { ChipButton, ChipCheckbox, ChipGroup } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Chip/ChipGroup',
  component: ChipGroup,
  decorators: [ddsProviderDecorator],
});

export const Preview = meta.story({
  render: args => (
    <ChipGroup {...args}>
      <ChipCheckbox>Filter 1</ChipCheckbox>
      <ChipCheckbox>Filter 2</ChipCheckbox>
      <ChipButton>Tøm filtre</ChipButton>
    </ChipGroup>
  ),
});
