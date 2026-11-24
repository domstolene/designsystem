import preview from '#.storybook/preview';

import { hookParameters } from '../hooks.utils';
import { CallbackRefExample } from './CallbackRefExample';

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

export default meta;

export const Preview = meta.story();
