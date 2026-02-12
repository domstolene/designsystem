import { type Meta, type StoryObj } from '@storybook/react-vite';

import { OnKeyDownExample } from './OnKeyDownExample';
import { hookParameters } from '../hooks.utils';

const meta: Meta<typeof OnKeyDownExample> = {
  title: 'dds-components/Hooks/useOnKeyDown',
  component: OnKeyDownExample,
  parameters: hookParameters,
  argTypes: {
    key: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof OnKeyDownExample>;

export const Preview: Story = {};
