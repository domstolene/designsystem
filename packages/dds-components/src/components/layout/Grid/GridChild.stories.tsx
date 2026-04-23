import preview from '#.storybook/preview';

import { Paper } from '..';
import { categoryCss, responsivePropsArgTypes } from '../../../storybook';

import { Grid, GridChild } from '.';

const meta = preview.meta({
  title: 'dds-components/Layout Primitives/Grid/GridChild',
  component: GridChild,
  argTypes: {
    gridRow: { control: 'text' },
    justifySelf: { control: 'text', table: categoryCss },
    columnsOccupied: { control: 'text' },
    ...responsivePropsArgTypes,
  },
});

export default meta;

export const Preview = meta.story({
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
});
