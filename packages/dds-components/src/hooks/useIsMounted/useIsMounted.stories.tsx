import { type Meta, type StoryObj } from '@storybook/react-vite';

import { IsMountedExample } from './IsMountedExample';
import { hookParameters } from '../hooks.utils';

const meta: Meta<typeof IsMountedExample> = {
  title: 'dds-components/Hooks/useIsMounted',
  component: IsMountedExample,
  parameters: hookParameters,
};

export default meta;
type Story = StoryObj<typeof IsMountedExample>;

export const Preview: Story = {};
