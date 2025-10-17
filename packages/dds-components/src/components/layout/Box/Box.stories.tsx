import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { useWindowResize } from '../../../hooks';
import {
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../../storybook';
import {
  getBreakpointFromScreenWidth,
  isBreakpointObject,
} from '../common/utils';

import { Box } from '.';

const meta: Meta<typeof Box> = {
  title: 'dds-components/Layout Primitives/Box',
  component: Box,
  argTypes: {
    ...responsivePropsArgTypes,
  },
  decorators: [Story => windowWidthDecorator(<Story />)],
};
export default meta;

type Story = StoryObj<typeof Box>;

export const Preview: Story = {
  args: {
    style: {
      border: '1px solid var(--dds-color-border-default)',
    },

    height: { xs: '1rem', sm: '2rem', md: '6rem', lg: '8rem', xl: '10rem' },
    width: '6rem',
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
        isBreakpointObject(args.padding) &&
        args.padding[getBreakpointFromScreenWidth(w)]
          ? args.padding[getBreakpointFromScreenWidth(w)]
          : 'ikke satt'}
      </Box>
    );
  },
};
