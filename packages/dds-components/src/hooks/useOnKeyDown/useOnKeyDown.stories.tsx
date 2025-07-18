import { type Meta, type StoryObj } from '@storybook/react-vite';

import { OnKeyDownExample } from './OnKeyDownExample';

const meta: Meta<typeof OnKeyDownExample> = {
  title: 'dds-components/Hooks/useOnKeyDown',
  component: OnKeyDownExample,
  parameters: {
    disableGlobalDecorator: true,
  },
};

export default meta;
type Story = StoryObj<typeof OnKeyDownExample>;

export const Preview: Story = { args: { key: '+' } };
