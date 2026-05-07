import preview from '#.storybook/preview';

import { VStack } from './VStack';
import { Box } from '../..';
import {
  responsiveStackPropsArgTypes,
  windowWidthDecorator,
} from '../../../../storybook';

const meta = preview.meta({
  title: 'dds-components/Layout Primitives/VStack',
  component: VStack,
  argTypes: {
    ...responsiveStackPropsArgTypes,
  },
});

export default meta;

const ExampleElement = () => (
  <Box
    width="5rem"
    height="5rem"
    style={{
      border: '1px dashed black',
    }}
  />
);

export const Preview = meta.story({
  args: {
    children: [
      <ExampleElement />,
      <ExampleElement />,
      <ExampleElement />,
      <ExampleElement />,
    ],
  },
});

export const StylingPerBreakpoint = meta.story({
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    style: {
      border: '1px dashed var(--dds-color-border-default)',
    },
    padding: {
      xs: 'x0.125',
      sm: 'x0.25',
      md: 'x0.5',
      lg: 'x1',
      xl: 'x2',
    },
    gap: {
      xs: 'x0.125',
      sm: 'x0.25',
      md: 'x0.5',
      lg: 'x1',
      xl: 'x2',
    },
    children: [
      <ExampleElement />,
      <ExampleElement />,
      <ExampleElement />,
      <ExampleElement />,
    ],
  },
});
