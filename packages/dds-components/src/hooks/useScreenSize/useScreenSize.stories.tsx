import preview from '#.storybook/preview';

import { ScreenSizeExample } from './ScreenSizeExample';
import { hookParameters } from '../hooks.utils';

const meta = preview.meta({
  title: 'dds-components/Hooks/useScreenSize',
  component: ScreenSizeExample,
  parameters: hookParameters,
});

export default meta;

export const Preview = meta.story();
