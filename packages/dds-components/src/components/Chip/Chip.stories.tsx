import preview from '#.storybook/preview';
import { fn } from 'storybook/test';

import { commonArgTypes, ddsProviderDecorator } from '../../storybook';

import { Chip } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Chip',
  component: Chip,
  argTypes: {
    ...commonArgTypes,
  },
  args: { onClose: fn() },
  decorators: [ddsProviderDecorator],
});

export const Preview = meta.story({
  args: { children: 'Chip' },
});
