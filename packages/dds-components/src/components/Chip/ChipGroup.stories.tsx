import preview from '#.storybook/preview';

import { ddsProviderDecorator } from '../../storybook';

import { Chip, ChipGroup } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Chip/ChipGroup',
  component: ChipGroup,
  decorators: [ddsProviderDecorator],
});

export const Preview = meta.story({
  render: args => (
    <ChipGroup {...args}>
      <Chip>Chip 1</Chip>
      <Chip>Chip 2</Chip>
    </ChipGroup>
  ),
});
