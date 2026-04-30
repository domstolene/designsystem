import preview from '#.storybook/preview';

import { OnClickOutsideExample } from './OnClickOutsideExample';
import { hookParameters } from '../hooks.utils';

const meta = preview.meta({
  title: 'dds-components/Hooks/useOnClickOutside',

  component: OnClickOutsideExample,
  parameters: hookParameters,
  argTypes: {
    element: { control: false },
  },
  args: {
    handler: () => {
      //placeholder
    },
  },
});

export default meta;

export const Preview = meta.story();
