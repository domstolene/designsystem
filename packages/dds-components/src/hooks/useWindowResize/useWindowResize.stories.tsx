import preview from '#.storybook/preview';

import { hookParameters } from '../hooks.utils';
import { WindowResizeExample } from './WindowResizeExample';

const meta = preview.meta({
  title: 'dds-components/Hooks/useWindowResize',
  component: WindowResizeExample,
  parameters: hookParameters,
  args: {
    handler: () => {
      //placeholder
    },
  },
});

export default meta;

export const Preview = meta.story({});
