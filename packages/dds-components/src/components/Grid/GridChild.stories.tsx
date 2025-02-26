import { type Meta, type StoryObj } from '@storybook/react';

import { Grid, GridChild } from '.';

export default {
  title: 'dds-components/Grid/GridChild',
  component: GridChild,
  argTypes: {
    gridRow: { control: false },
    justifySelf: { control: 'text' },
    // feil props vises i tabell, quick fix for å unngå forvirring
    // TODO: fikse åvise riktige props
    // xs: { table: { disable: true } },
    // sm: { table: { disable: true } },
    // md: { table: { disable: true } },
    // lg: { table: { disable: true } },
    // xl: { table: { disable: true } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof GridChild>;

type Story = StoryObj<typeof GridChild>;

export const Default: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        <style>
          {`
          .story-grid, .story-grid__child {
            border: 1px dashed gray;
            padding:  var(--dds-spacing-x0-5);
            }
            
          .story-grid__child {
            background: var(--dds-color-surface-subtle);
          }
        `}
        </style>
      </>
    ),
  ],
  args: { columnsOccupied: 'all' },
  render: args => {
    return (
      <Grid as="div" className="story-grid">
        <GridChild {...args}>
          <div className="story-grid__child">GridChild</div>
        </GridChild>
      </Grid>
    );
  },
};
