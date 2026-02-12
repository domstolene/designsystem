import { type Meta } from '@storybook/react-vite';

import {
  BorderRadiusBaseGenerator,
  ColorsBaseGenerator,
  ShadowsBaseGenerator,
  Wrapper,
} from './utils';
import { MotionBaseGenerator } from './utils/MotionGenerator';
import { ddsProviderDecorator } from '../../packages/dds-components/src/storybook';

const meta: Meta = {
  title: 'dds-design-tokens/Tokens/NotExposed',
  parameters: {
    disableGlobalDecorator: true,
  },
  tags: ['!autodocs'],
  decorators: [ddsProviderDecorator],
};
export default meta;

export const ColorsBase = () => {
  return <Wrapper>{ColorsBaseGenerator()}</Wrapper>;
};

export const BorderRadiusBase = () => {
  return <Wrapper>{BorderRadiusBaseGenerator()}</Wrapper>;
};

export const ShadowsBase = () => {
  return <Wrapper>{ShadowsBaseGenerator()}</Wrapper>;
};

export const MotionBase = () => {
  return <Wrapper>{MotionBaseGenerator()}</Wrapper>;
};
