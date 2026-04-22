import preview from '#.storybook/preview';

import { CallbackRefExample } from './CallbackRefExample';
import { hookParameters } from '../hooks.utils';

const meta = preview.meta({
  title: 'dds-components/Hooks/useCallbackRef',
  component: CallbackRefExample,
  parameters: hookParameters,
  argTypes: {
    deps: { control: false },
  },
  args: {
    callback: () => {
      //test
    },
  },
});

export const Preview = meta.story();
