import { type Meta, type StoryObj } from '@storybook/react-vite';

import { FloatPositionExample } from './FloatPositionExample';

const meta: Meta<typeof FloatPositionExample> = {
  title: 'dds-components/Hooks/useFloatPosition',
  component: FloatPositionExample,
  parameters: {
    disableGlobalDecorator: true,
  },
  argTypes: {
    arrowRef: { control: false },
    options: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof FloatPositionExample>;

export const Preview: Story = {};
