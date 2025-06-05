import { type Meta } from '@storybook/react-vite';

import {
  BorderRadiusBaseGenerator,
  ColorsBaseGenerator,
  wrapperStyle,
} from './utils';

const meta: Meta = {
  title: 'dds-design-tokens/Tokens/NotExposed',
  parameters: {
    disableGlobalDecorator: true,
  },
};
export default meta;

export const ColorsBase = () => {
  return <div style={wrapperStyle}>{ColorsBaseGenerator()}</div>;
};

export const BorderRadiusBase = () => {
  return <div style={wrapperStyle}>{BorderRadiusBaseGenerator()}</div>;
};
