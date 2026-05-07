import preview from '#.storybook/preview';

import { CombinedRefExample } from './CombinedRefExample';
import { hookParameters } from '../hooks.utils';

const meta = preview.meta({
  title: 'dds-components/Hooks/useCombinedRef',
  component: CombinedRefExample,
  parameters: hookParameters,
  argTypes: {
    refs: { control: false },
  },
});

export default meta;

export const Preview = meta.story({ args: { refs: [null] } });
