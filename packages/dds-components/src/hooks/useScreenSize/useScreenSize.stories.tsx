import preview from '#.storybook/preview';

import { hookParameters } from '../hooks.utils';
import { ScreenSizeExample } from './ScreenSizeExample';

const meta = preview.meta({
  title: 'dds-components/Hooks/useScreenSize',
  component: ScreenSizeExample,
  parameters: hookParameters,
});

export default meta;

export const Preview = meta.story();
