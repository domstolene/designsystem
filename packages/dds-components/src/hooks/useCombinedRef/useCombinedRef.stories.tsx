import preview from '#.storybook/preview';

import { hookParameters } from '../hooks.utils';
import { CombinedRefExample } from './CombinedRefExample';

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
