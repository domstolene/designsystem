import preview from '#.storybook/preview';

import { FloatPositionExample } from './FloatPositionExample';
import { hookParameters } from '../hooks.utils';

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

export const Preview = meta.story();
