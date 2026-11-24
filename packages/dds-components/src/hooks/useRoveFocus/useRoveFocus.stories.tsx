import preview from '#.storybook/preview';

import { hookParameters } from '../hooks.utils';
import { RoveFocusExample } from './RoveFocusExample';

const meta = preview.meta({
  title: 'dds-components/Hooks/useRoveFocus',
  component: RoveFocusExample,
  parameters: hookParameters,
});

export default meta;

export const Preview = meta.story({
  args: {
    size: 4,
    active: true,
    direction: 'column',
  },
});
