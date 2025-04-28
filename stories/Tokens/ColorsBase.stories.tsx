import { type Meta } from '@storybook/react';

import {
  ColorsBaseGenerator,
  DataColorsBaseGenerator,
  wrapperStyle,
} from './utils';

const meta: Meta = {
  title: 'dds-design-tokens/Tokens/ColorsBase',
  parameters: {
    disableGlobalDecorator: true,
  },
};
export default meta;

export const Base = () => {
  return <div style={wrapperStyle}>{ColorsBaseGenerator()}</div>;
};

export const DataVisualisation = () => {
  return <div style={wrapperStyle}>{DataColorsBaseGenerator()}</div>;
};
