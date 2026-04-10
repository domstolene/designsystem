import preview from '#.storybook/preview';

import { MountTransitionExample } from './MountTransitionExample';
import { hookParameters } from '../hooks.utils';

const meta = preview.meta({
  title: 'dds-components/Hooks/useMountTransition',
  component: MountTransitionExample,
  parameters: hookParameters,
});

export const Preview = meta.story({
  args: { isMounted: false, unmountDelay: 1000 },
});
