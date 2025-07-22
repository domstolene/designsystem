import { type Meta, type StoryObj } from '@storybook/react-vite';

import { CombinedRefExample } from './CombinedRefExample';

const meta: Meta<typeof CombinedRefExample> = {
  title: 'dds-components/Hooks/useCombinedRef',
  component: CombinedRefExample,
  parameters: {
    disableGlobalDecorator: true,
  },
  argTypes: {
    refs: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof CombinedRefExample>;

export const Preview: Story = {};
