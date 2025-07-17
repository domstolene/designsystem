import { type Meta, type StoryObj } from '@storybook/react-vite';

import { MountTransitionExample } from './MountTransitionExample';

const meta: Meta<typeof MountTransitionExample> = {
  title: 'dds-components/Hooks/useMountTransition',
  component: MountTransitionExample,
  parameters: {
    disableGlobalDecorator: true,
  },
};

export default meta;
type Story = StoryObj<typeof MountTransitionExample>;

export const Preview: Story = {
  args: { isMounted: false, unmountDelay: 1000 },
};
