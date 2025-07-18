import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ReturnFocusOnBlurExample } from './ReturnFocusOnBlurExample';

const meta: Meta<typeof ReturnFocusOnBlurExample> = {
  title: 'dds-components/Hooks/useReturnFocusOnBlur',
  component: ReturnFocusOnBlurExample,
  parameters: {
    disableGlobalDecorator: true,
  },
};

export default meta;
type Story = StoryObj<typeof ReturnFocusOnBlurExample>;

export const Preview: Story = {};
