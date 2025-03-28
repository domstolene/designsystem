import { type Meta, type StoryObj } from '@storybook/react';

import { htmlPropsArgType } from '../../storybook/helpers';
import { Contrast } from '../Contrast';
import { Typography } from '../Typography';

import { Divider } from '.';

export default {
  title: 'dds-components/Components/Divider',
  component: Divider,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
  argTypes: {
    htmlProps: htmlPropsArgType,
  },
} satisfies Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

const contrastStyling = `
  .story-container {
    padding: 1px;
    }
    `;

export const Overview: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        <style>{contrastStyling}</style>
      </>
    ),
  ],
  render: args => (
    <>
      <Divider {...args} />
      <Divider {...args} color="subtle" />
      <Contrast className="story-container">
        <Divider {...args} color="on-inverse" />
      </Contrast>
    </>
  ),
};

export const OnInverse: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        <style>{contrastStyling}</style>
      </>
    ),
  ],
  args: { color: 'on-inverse' },
  render: args => (
    <Contrast className="story-container">
      <Divider {...args} />
    </Contrast>
  ),
};

export const Example: Story = {
  render: args => (
    <div>
      <Typography withMargins>
        Vitner er svært viktige for rettssikkerheten i samfunnet. Du har fått en
        innkalling (kalles stevning) til saken fordi partene eller retten mener
        du kjenner til noe som kan være viktig for retten å vite. Du har plikt
        til å møte opp i tråd med innkallingen og forklare deg for retten.
      </Typography>
      <Divider {...args} />
      <Typography withMargins>
        En rettssak avgjøres med bakgrunn i det som er kommet fram i rettssalen.
        Derfor må vitner forklare seg for retten slik at dommerne hører
        vitneforklaringen. Det gjelder selv om man tidligere ha forklart seg for
        politiet eller partenes advokat. En vitneforklaring kan avgjøre utfallet
        av en sak, derfor har vitner plikt til å snakke sant.
      </Typography>
    </div>
  ),
};
