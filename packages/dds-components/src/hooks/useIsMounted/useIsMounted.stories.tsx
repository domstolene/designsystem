import preview from '#.storybook/preview';

import { IsMountedExample } from './IsMountedExample';
import { hookParameters } from '../hooks.utils';

const meta = preview.meta({
  title: 'dds-components/Hooks/useIsMounted',
  component: IsMountedExample,
  parameters: hookParameters,
});

export default meta;

export const Preview = meta.story();
