import preview from '#.storybook/preview';

import { ReturnFocusOnBlurExample } from './ReturnFocusOnBlurExample';
import { hookParameters } from '../hooks.utils';

const meta = preview.meta({
  title: 'dds-components/Hooks/useReturnFocusOnBlur',
  component: ReturnFocusOnBlurExample,
  parameters: hookParameters,
  argTypes: {
    active: { control: false },
    triggerElement: { control: false },
  },
  args: {
    active: true,
    onBlur: () => {
      //placeholder
    },
  },
});

export const Preview = meta.story();
