import { type Meta, type StoryObj } from '@storybook/react-vite';

import { FocusTrapExample } from './FocusTrapExample';

const meta: Meta<typeof FocusTrapExample> = {
  title: 'dds-components/Hooks/useFocusTrap',
  component: FocusTrapExample,
  parameters: {
    disableGlobalDecorator: true,
  },
};

export default meta;

type Story = StoryObj<typeof FocusTrapExample>;

export const Default: Story = {};
