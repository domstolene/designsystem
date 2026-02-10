import { type Meta, type StoryObj } from '@storybook/react-vite';

import { WindowResizeExample } from './WindowResizeExample';
import { hookParameters } from '../hooks.utils';

const meta: Meta<typeof WindowResizeExample> = {
  title: 'dds-components/Hooks/useWindowResize',
  component: WindowResizeExample,
  parameters: hookParameters,
};

export default meta;
type Story = StoryObj<typeof WindowResizeExample>;

export const Preview: Story = {};
