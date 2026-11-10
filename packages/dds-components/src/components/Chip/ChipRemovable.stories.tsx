import preview from '#.storybook/preview';

import { ddsProviderDecorator } from '../../storybook';
import { commonChipArgTypes } from './Chip.storyArgs';

import { ChipRemovable } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Chip',
  component: ChipRemovable,
  argTypes: {
    ...commonChipArgTypes,
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Removable = meta.story({
  args: { children: 'ChipRemovable' },
  render: args => <ChipRemovable {...args} />,
});
