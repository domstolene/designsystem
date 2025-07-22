import { type Meta, type StoryObj } from '@storybook/react-vite';

import { CallbackRefExample } from './CallbackRefExample';

const meta: Meta<typeof CallbackRefExample> = {
  title: 'dds-components/Hooks/useCallbackRef',
  component: CallbackRefExample,
  parameters: {
    disableGlobalDecorator: true,
  },
  argTypes: {
    deps: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof CallbackRefExample>;

export const Preview: Story = {};
