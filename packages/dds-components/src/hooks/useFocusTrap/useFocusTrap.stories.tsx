import preview from '#.storybook/preview';

import { hookParameters } from '../hooks.utils';
import { FocusTrapExample } from './FocusTrapExample';

const meta = preview.meta({
  title: 'dds-components/Hooks/useFocusTrap',
  component: FocusTrapExample,
  parameters: hookParameters,
  argTypes: {
    active: { control: false },
    initialFocusRef: { control: false },
  },
});

export default meta;

export const Preview = meta.story();
