import { type Meta, type StoryObj } from '@storybook/react-vite';

import { FocusTrapExample } from './FocusTrapExample';
import { hookParameters } from '../hooks.utils';

const meta: Meta<typeof FocusTrapExample> = {
  title: 'dds-components/Hooks/useFocusTrap',
  component: FocusTrapExample,
  parameters: hookParameters,
  argTypes: {
    active: { control: false },
    initialFocusRef: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof FocusTrapExample>;

export const Preview: Story = {};
