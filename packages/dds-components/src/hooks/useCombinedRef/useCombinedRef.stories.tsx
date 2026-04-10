import preview from '#.storybook/preview';
import { useRef } from 'react';

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

const ref1 = useRef<HTMLDivElement>(null);
const ref2 = useRef<HTMLDivElement>(null);

export const Preview = meta.story({ args: { refs: [ref1, ref2] } });
