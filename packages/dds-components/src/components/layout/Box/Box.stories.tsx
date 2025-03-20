import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { useWindowResize } from '../../../hooks';
import {
  htmlPropsArgType,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../../storybook/helpers';
import { isCustomBreakpointObject } from '../common/Responsive.types';
import { getBreakpointFromScreenWidth } from '../common/utils';

import { Box } from '.';

const meta: Meta<typeof Box> = {
  title: 'dds-components/Layout Primitives/Box',
  component: Box,
  argTypes: {
    breakpointBelow: { control: 'select' },
    breakpointAbove: { control: 'select' },
    ...responsivePropsArgTypes,
    className: htmlPropsArgType,
    style: htmlPropsArgType,
  },
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  decorators: [Story => windowWidthDecorator(<Story />)],
};
export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    style: {
      border: '1px solid var(--dds-color-border-default)',
    },
    padding: 'x0.125',
  },
};

export const WithCustomPadding: Story = {
  args: {
    style: {
      border: '1px solid var(--dds-color-border-default)',
    },
    padding: '10%',
  },
};

export const WithPaddingPerBreakpoint: Story = {
  args: {
    style: {
      border: '1px solid var(--dds-color-border-default)',
    },
    padding: { sm: 'x1.5', md: 'x0.75', lg: '10%', xl: '20%' },
  },
  render: args => {
    const [w, setW] = useState(window.innerWidth);
    useWindowResize(() => setW(window.innerWidth));

    return (
      <Box {...args}>
        Ved dette brekkpunktet er padding{' '}
        {args.padding &&
        isCustomBreakpointObject(args.padding) &&
        args.padding[getBreakpointFromScreenWidth(w)]
          ? args.padding[getBreakpointFromScreenWidth(w)]
          : 'ikke satt'}
      </Box>
    );
  },
};
