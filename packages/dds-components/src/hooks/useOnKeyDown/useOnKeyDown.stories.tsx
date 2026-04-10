import preview from '#.storybook/preview';

import { OnKeyDownExample } from './OnKeyDownExample';
import { hookParameters } from '../hooks.utils';

const meta = preview.meta({
  title: 'dds-components/Hooks/useOnKeyDown',
  component: OnKeyDownExample,
  parameters: hookParameters,
  argTypes: {
    key: { control: false },
  },
  args: {
    key: '',
    handler: () => {
      //placeholder
    },
  },
});

export const Preview = meta.story();
