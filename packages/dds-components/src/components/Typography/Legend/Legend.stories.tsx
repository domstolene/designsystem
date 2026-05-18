import preview from '#.storybook/preview';

import { Legend } from '..';
import { ddsProviderDecorator } from '../../../storybook';
import { blockTgCommonArgTypes } from '../storyUtils';

const meta = preview.meta({
  title: 'dds-components/Components/Typography/Legend',
  component: Legend,
  argTypes: {
    ...blockTgCommonArgTypes,
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Preview = meta.story({
  args: { children: 'Legend' },
});
