import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ScreenSizeExample } from './ScreenSizeExample';

const meta: Meta<typeof ScreenSizeExample> = {
  title: 'dds-components/Hooks/useScreenSize',
  component: ScreenSizeExample,
  parameters: {
    disableGlobalDecorator: true,
  },
};

export default meta;

type Story = StoryObj<typeof ScreenSizeExample>;

export const Preview: Story = {};
