import type { Meta, StoryObj } from '@storybook/react-vite';

import { RoveFocusExample } from './RoveFocusExample';
import { hookParameters } from '../hooks.utils';

export default {
  title: 'dds-components/Hooks/useRoveFocus',
  component: RoveFocusExample,
  parameters: hookParameters,
} as Meta<typeof RoveFocusExample>;

type Story = StoryObj<typeof RoveFocusExample>;
export const Preview: Story = {
  args: {
    size: 4,
    active: true,
    direction: 'column',
  },
};
