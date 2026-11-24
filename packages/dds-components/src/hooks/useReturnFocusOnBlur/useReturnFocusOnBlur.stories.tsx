import preview from '#.storybook/preview';

import { hookParameters } from '../hooks.utils';
import { ReturnFocusOnBlurExample } from './ReturnFocusOnBlurExample';

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

export default meta;

export const Preview = meta.story();
