import { type Meta } from '@storybook/react';

import {
  BorderRadiusGenerator,
  BreakpointsGenerator,
  ColorsGenerator,
  DataColorsGenerator,
  GridGenerator,
  IconSizesGenerator,
  ShadowsGenerator,
  SpacingGenerator,
  TypographyGenerator,
  wrapperStyle,
} from './utils';
import { ZIndexGenerator } from './utils/ZIndexGenerator';

const meta: Meta = {
  title: 'dds-design-tokens/Tokens',
  parameters: {
    disableGlobalDecorator: true,
  },
};
export default meta;

export const BorderRadius = () => {
  return (
    <div style={wrapperStyle}>
      <h2>Core</h2>
      {BorderRadiusGenerator('core')}
      <h2>Public</h2>
      {BorderRadiusGenerator('public')}
    </div>
  );
};

export const Breakpoints = () => {
  return <div style={wrapperStyle}> {BreakpointsGenerator()}</div>;
};

export const Colors = () => {
  return <div style={wrapperStyle}> {ColorsGenerator()}</div>;
};

export const ColorsDataVisualisation = () => {
  return <div style={wrapperStyle}> {DataColorsGenerator()}</div>;
};

export const Grid = () => {
  return <div style={wrapperStyle}> {GridGenerator()}</div>;
};

export const IconSizes = () => {
  return <div style={wrapperStyle}> {IconSizesGenerator()}</div>;
};

export const Shadows = () => {
  return <div style={wrapperStyle}> {ShadowsGenerator()}</div>;
};

export const Spacing = () => {
  return <div style={wrapperStyle}> {SpacingGenerator()}</div>;
};

export const Typography = () => {
  return (
    <div style={{ maxWidth: '120ch', marginInline: 'auto' }}>
      <h2>Core</h2>
      {TypographyGenerator('core')}
      <h2>Public</h2>
      {TypographyGenerator('public')}
    </div>
  );
};

export const ZIndex = () => {
  return <div style={wrapperStyle}> {ZIndexGenerator()}</div>;
};
