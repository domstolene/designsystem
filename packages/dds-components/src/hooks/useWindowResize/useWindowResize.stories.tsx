import { type Meta, type StoryObj } from '@storybook/react-vite';

import { WindowResizeExample } from './WindowResizeExample';

const meta: Meta<typeof WindowResizeExample> = {
  title: 'dds-components/Hooks/useWindowResize',
  component: WindowResizeExample,
  parameters: {
    disableGlobalDecorator: true,
  },
};

export default meta;
type Story = StoryObj<typeof WindowResizeExample>;

export const Preview: Story = {};
