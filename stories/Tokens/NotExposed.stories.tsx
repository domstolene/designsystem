import { type Meta } from '@storybook/react-vite';

import {
  BorderRadiusBaseGenerator,
  ColorsBaseGenerator,
  ShadowsBaseGenerator,
  wrapperStyle,
} from './utils';
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
  return <div style={wrapperStyle}>{ColorsBaseGenerator()}</div>;
};

export const BorderRadiusBase = () => {
  return <div style={wrapperStyle}>{BorderRadiusBaseGenerator()}</div>;
};

export const ShadowsBase = () => {
  return <div style={wrapperStyle}>{ShadowsBaseGenerator()}</div>;
};
