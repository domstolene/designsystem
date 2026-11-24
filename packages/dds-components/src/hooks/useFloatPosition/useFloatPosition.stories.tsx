import preview from '#.storybook/preview';

import { hookParameters } from '../hooks.utils';
import { FloatPositionExample } from './FloatPositionExample';

const meta = preview.meta({
  title: 'dds-components/Hooks/useFloatPosition',
  component: FloatPositionExample,
  parameters: hookParameters,
  args: {
    options: {},
  },
  argTypes: {
    arrowRef: { control: false },
    options: { control: false },
  },
});

export default meta;

export const Preview = meta.story();
