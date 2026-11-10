import preview from '#.storybook/preview';

import { hookParameters } from '../hooks.utils';
import { OnClickOutsideExample } from './OnClickOutsideExample';

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
