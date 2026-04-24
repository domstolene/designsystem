import preview from '#.storybook/preview';

import { ControllableStateExample } from './ControllableStateExample';
import { hookParameters } from '../hooks.utils';

const meta = preview.meta({
  title: 'dds-components/Hooks/useControllableState',
  component: ControllableStateExample,
  parameters: hookParameters,
  argTypes: {
    value: { control: false },
    defaultValue: { control: false },
  },
});

export default meta;

export const Preview = meta.story();
