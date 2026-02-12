import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ControllableStateExample } from './ControllableStateExample';
import { hookParameters } from '../hooks.utils';

const meta: Meta<typeof ControllableStateExample> = {
  title: 'dds-components/Hooks/useControllableState',
  component: ControllableStateExample,
  parameters: hookParameters,
  argTypes: {
    value: { control: false },
    defaultValue: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ControllableStateExample>;

export const Preview: Story = {};
