import { type Meta, type StoryObj } from '@storybook/react-vite';

import { OnClickOutsideExample } from './OnClickOutsideExample';

const meta: Meta<typeof OnClickOutsideExample> = {
  title: 'dds-components/Hooks/useOnClickOutside',

  component: OnClickOutsideExample,

  parameters: {
    disableGlobalDecorator: true,
  },
  argTypes: {
    element: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof OnClickOutsideExample>;

export const Preview: Story = {};
