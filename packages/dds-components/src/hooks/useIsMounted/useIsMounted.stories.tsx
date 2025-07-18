import { type Meta, type StoryObj } from '@storybook/react-vite';

import { IsMountedExample } from './IsMountedExample';

const meta: Meta<typeof IsMountedExample> = {
  title: 'dds-components/Hooks/useIsMounted',
  component: IsMountedExample,
  parameters: {
    disableGlobalDecorator: true,
  },
};

export default meta;
type Story = StoryObj<typeof IsMountedExample>;

export const Preview: Story = {};
