import preview from '#.storybook/preview';

import { FocusTrapExample } from './FocusTrapExample';
import { hookParameters } from '../hooks.utils';

const meta = preview.meta({
  title: 'dds-components/Hooks/useFocusTrap',
  component: FocusTrapExample,
  parameters: hookParameters,
  argTypes: {
    active: { control: false },
    initialFocusRef: { control: false },
  },
});

export const Preview = meta.story();
