import {
  BorderRadiusGenerator,
  BreakpointsGenerator,
  ColorsGenerator,
  GridGenerator,
  IconSizesGenerator,
  ShadowsGenerator,
  TypographyGenerator,
} from './utils';

export default {
  title: 'dds-design-tokens/Tokens',
};

export const BorderRadius = () => {
  return (
    <div>
      <h2>Core</h2>
      {BorderRadiusGenerator('core')}
      <h2>Public</h2>
      {BorderRadiusGenerator('public')}
    </div>
  );
};

export const Breakpoints = () => {
  return BreakpointsGenerator();
};

export const Colors = () => {
  return ColorsGenerator();
};

export const Grid = () => {
  return GridGenerator();
};

export const IconSizes = () => {
  return IconSizesGenerator();
};

export const Shadows = () => {
  return ShadowsGenerator();
};

export const Typography = () => {
  return (
    <div>
      <h2>Core</h2>
      {TypographyGenerator('core')}
      <h2>Public</h2>
      {TypographyGenerator('public')}
    </div>
  );
};
