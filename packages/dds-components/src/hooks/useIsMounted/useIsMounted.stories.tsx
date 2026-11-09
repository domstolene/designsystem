import preview from '#.storybook/preview';

import { hookParameters } from '../hooks.utils';
import { IsMountedExample } from './IsMountedExample';

const meta = preview.meta({
  title: 'dds-components/Hooks/useIsMounted',
  component: IsMountedExample,
  parameters: hookParameters,
});

export default meta;

export const Preview = meta.story();
