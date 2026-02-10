import { type Meta, type StoryObj } from '@storybook/react-vite';

import { FloatPositionExample } from './FloatPositionExample';
import { hookParameters } from '../hooks.utils';

const meta: Meta<typeof FloatPositionExample> = {
  title: 'dds-components/Hooks/useFloatPosition',
  component: FloatPositionExample,
  parameters: hookParameters,
  argTypes: {
    arrowRef: { control: false },
    options: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof FloatPositionExample>;

export const Preview: Story = {};
