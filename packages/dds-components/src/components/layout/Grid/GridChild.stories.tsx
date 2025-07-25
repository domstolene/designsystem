import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Paper } from '..';
import {
  categoryCss,
  responsivePropsArgTypes,
} from '../../../storybook/helpers';

import { Grid, GridChild } from '.';

export default {
  title: 'dds-components/Layout Primitives/Grid/GridChild',
  component: GridChild,
  argTypes: {
    gridRow: { control: 'text' },
    justifySelf: { control: 'text', table: categoryCss },
    columnsOccupied: { control: 'text' },
    ...responsivePropsArgTypes,
  },
} satisfies Meta<typeof GridChild>;

type Story = StoryObj<typeof GridChild>;

export const Preview: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        <style>
          {`
          .story-styling {
            border: 1px dashed gray;
            }
        `}
        </style>
      </>
    ),
  ],
  args: { columnsOccupied: 'all' },
  render: args => {
    return (
      <Grid as="div" padding="x1" className="story-styling">
        <GridChild {...args}>
          <Paper padding="x0.5" className="story-styling">
            GridChild
          </Paper>
        </GridChild>
      </Grid>
    );
  },
};
