import preview from '#.storybook/preview';

import { Paper } from '..';
import { CSSArgType, responsivePropsArgTypes } from '../../../storybook';

import { Grid, GridChild } from '.';

const meta = preview.meta({
  title: 'dds-components/Layout Primitives/Grid/GridChild',
  component: GridChild,
  argTypes: {
    columnsOccupied: { control: 'text' },
    ...responsivePropsArgTypes,
    gridRow: CSSArgType,
    justifySelf: CSSArgType,
    gridArea: CSSArgType,
  },
});

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
