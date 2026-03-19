import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { commonArgTypes, ddsProviderDecorator } from '../../storybook';

import { Chip } from '.';

const meta: Meta<typeof Chip> = {
  title: 'dds-components/Components/Chip',
  component: Chip,
  argTypes: {
    ...commonArgTypes,
  },
  args: { onClose: fn() },
  decorators: [ddsProviderDecorator],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Preview: Story = {
  args: { children: 'Chip' },
};
