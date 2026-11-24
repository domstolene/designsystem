import preview from '#.storybook/preview';

import { hookParameters } from '../hooks.utils';
import { ControllableStateExample } from './ControllableStateExample';

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
