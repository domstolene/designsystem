import preview from '#.storybook/preview';

import {
  BorderRadiusBaseGenerator,
  ColorsBaseGenerator,
  ShadowsBaseGenerator,
  Wrapper,
} from './utils';
import { MotionBaseGenerator } from './utils/MotionGenerator';
import { ddsProviderDecorator } from '../../packages/dds-components/src/storybook';

const meta = preview.meta({
  title: 'dds-design-tokens/Tokens/NotExposed',
  parameters: {
    disableGlobalDecorator: true,
  },
  tags: ['!autodocs'],
  decorators: [ddsProviderDecorator],
});

export const ColorsBase = meta.story(() => {
  return <Wrapper>{ColorsBaseGenerator()}</Wrapper>;
});

export const BorderRadiusBase = meta.story(() => {
  return <Wrapper>{BorderRadiusBaseGenerator()}</Wrapper>;
});

export const ShadowsBase = meta.story(() => {
  return <Wrapper>{ShadowsBaseGenerator()}</Wrapper>;
});

export const MotionBase = meta.story(() => {
  return <Wrapper>{MotionBaseGenerator()}</Wrapper>;
});
