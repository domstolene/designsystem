import { type Meta, type StoryObj } from '@storybook/react-vite';

import { OnClickOutsideExample } from './OnClickOutsideExample';
import { hookParameters } from '../hooks.utils';

const meta: Meta<typeof OnClickOutsideExample> = {
  title: 'dds-components/Hooks/useOnClickOutside',

  component: OnClickOutsideExample,
  parameters: hookParameters,
  argTypes: {
    element: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof OnClickOutsideExample>;

export const Preview: Story = {};
