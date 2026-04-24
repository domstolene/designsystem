import preview from '#.storybook/preview';

import { WindowResizeExample } from './WindowResizeExample';
import { hookParameters } from '../hooks.utils';

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
