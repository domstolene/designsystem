import { type Meta, type StoryObj } from '@storybook/react';

import { Grid, GridChild } from '.';

export default {
  title: 'dds-components/Grid/GridChild',
  component: GridChild,
  argTypes: {
    gridRow: { control: 'text' },
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
  args: { columnsOccupied: 'all' },
  render: args => {
    const containerStyle = {
      width: '100%',
      border: '1px dashed gray',
      padding: ' var(--dds-spacing-x0-5)',
      background: 'var(--dds-color-surface-subtle)',
    };

    return (
      <Grid as="div" style={containerStyle}>
        <GridChild {...args}>
          <div style={containerStyle}>GridChild</div>
        </GridChild>
      </Grid>
    );
  },
};
