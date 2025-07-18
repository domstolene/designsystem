import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ControllableStateExample } from './ControllableStateExample';

const meta: Meta<typeof ControllableStateExample> = {
  title: 'dds-components/Hooks/useControllableState',
  component: ControllableStateExample,
  parameters: {
    disableGlobalDecorator: true,
  },
};

export default meta;
type Story = StoryObj<typeof ControllableStateExample>;

export const Preview: Story = {};
