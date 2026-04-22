import preview from '#.storybook/preview';

import { RoveFocusExample } from './RoveFocusExample';
import { hookParameters } from '../hooks.utils';

const meta = preview.meta({
  title: 'dds-components/Hooks/useRoveFocus',
  component: RoveFocusExample,
  parameters: hookParameters,
});

export const Preview = meta.story({
  args: {
    size: 4,
    active: true,
    direction: 'column',
  },
});
